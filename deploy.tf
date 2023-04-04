terraform {
    backend "s3" {
        endpoint                    = "https://objectstore.nyc1.civo.com"
        bucket                      = "states"
        key                         = "app.tfstate"
        region                      = "NYC1"
        skip_region_validation      = true
        skip_credentials_validation = true
        skip_metadata_api_check     = true
        force_path_style            = true
    }
}

variable "name" {}
variable "tag" {}
variable "host" {}
variable "token" {}

provider "kubernetes" {
    host     = var.host
    token    = var.token
    insecure = true
}

locals {
    settings = {
        name      = var.name
        namespace = "convictionsai"
        type      = "frontend"
        version   = var.tag
        resources = {
            replicas = 1
            requests = {
                cpu    = "500m"
                memory = "500Mi"
            }
            limits = {
                cpu    = "500m"
                memory = "500Mi"
            }
        }
        networking = {
            ingress = {
                hostname = "app.convictions.ai"
                path     = "/"
            }
            ports = [
                {
                    name = "http"
                    port = 8080
                }
            ]
        }
        env = {}
    }
}

module "deploy" {
    source   = "github.com/convictionsai/terraform-kubernetes-deployment.git?ref=0.0.2"
    settings = local.settings
}
