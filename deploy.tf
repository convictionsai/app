#provider "kubernetes" {
#    config_path = "~/.kube/config"
#}

provider "kubernetes" {

  context
  #alias = "this"
  host  = var.KUBERNETES_SERVER
  token = var.KUBERNETES_TOKEN
  #cluster_ca_certificate = file("<path-to-your-ca-certificate>")
  insecure = true

}

/* provider "civo" {
  token = var.civo_api_token
}

data "civo_kubernetes_cluster" "my-cluster" {
    name = "sandbox"
}

provider "kubernetes" {
  host                   = data.civo_kubernetes_cluster.my-cluster.kubeconfig[0].server
  token                  = data.civo_kubernetes_cluster.my-cluster.kubeconfig[0].token
  cluster_ca_certificate = base64decode(data.civo_kubernetes_cluster.my-cluster.kubeconfig[0].certificate_authority_data)
} */

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

module "deployment-frontend-app" {

  source = "github.com/convictionsai/terraform-kubernetes-deployment"

  repo = {
    type      = "frontend"
    namespace = "convictionsai"
    name      = "app"
    version   = "0.0.6"
    resources = {
      replicas = 1
      cpu      = "500m"
      memory   = "512Mi"
    }
    networking = {
      ports = [
        {
          name          = "http"
          containerPort = 8080
          targetPort    = 8080
          protocol      = "TCP"

        }
      ]
      ingress = {
        hostname = "app.convictions.ai"
        path     = "/"
      }
    }
  }

  environment_variables = {

  }
}

resource "kubernetes_service_account" "cicd" {
  metadata {
    name      = "cicd"
    namespace = "convictionsai"
  }
}

resource "kubernetes_cluster_role" "cicd" {
  metadata {
    name = "cicd"
  }

  rule {
    api_groups = [
      ""
    ]
    resources = [
      "componentstatuses"
    ]
    verbs = [
      "list"
    ]
  }

  rule {
    api_groups = [
      ""
    ]
    resources = [
      "componentstatuses"
    ]
    verbs = [
      "list"
    ]
  }

  rule {
    api_groups = [
      "networking.k8s.io"
    ]
    resources = [
      "ingresses"
    ]
    verbs = [
      "get",
      "create",
      "update",
      "delete"
    ]
  }

  rule {
    api_groups = [
      ""
    ]
    resources = [
      "services"
    ]
    verbs = [
      "get",
      "create",
      "update",
      "delete"
    ]
  }

  rule {
    api_groups = [
      "apps"
    ]
    resources = [
      "deployments"
    ]
    verbs = [
      "get",
      "create",
      "update",
      "delete"
    ]
  }
}

resource "kubernetes_cluster_role_binding" "cicd" {
  metadata {
    name = "cicd"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "cicd"
  }

  subject {
    kind      = "ServiceAccount"
    name      = "cicd"
    namespace = "convictionsai"

  }
}

variable "KUBERNETES_SERVER" {
  type        = string
  description = "Kubernetes server endpoint for the TF Kubernetes provider"
}

variable "civo_api_token" {
  description = "Civo API token"
  type        = string
  sensitive   = true
}

variable "KUBERNETES_TOKEN" {
  type        = string
  description = "Kubernetes token to auth with the endpoint for the TF Kubernetes provider"
}