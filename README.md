# KubeEphemeral Demo App

This is a simple Node.js application with a Postgres database designed to demonstrate the **Seed Hook** feature of KubeEphemeral.

## Structure

- `k8s/`: Kubernetes manifests
  - `manifests.yaml`: Deployment, Service, and ConfigMap (containing app source code)
- `.kubeephemeral.yaml`: Configuration for the Seed Hook

## How to use

1. **Deploy with KubeEphemeral**:
   - Push this directory to your Git repository.
   - Open a Pull Request.
   - KubeEphemeral will:
     - Detect the manifests in `k8s/`
     - Detect `.kubeephemeral.yaml`
     - Deploy the app and database
     - Run the seed job defined in `.kubeephemeral.yaml` (`npm run seed`)

2. **Verify**:
   - Access the preview URL.
   - The main page should list users seeded into the database.
   - You can also check the seed job status in the `PreviewEnvironment` resource status.
