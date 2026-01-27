# Demo App for KubeEphemeral Testing

A simple web application to test KubeEphemeral preview environments with Kubernetes manifests.

## Structure

```
k8s/
├── deployment.yaml  # Simple nginx deployment
└── service.yaml     # ClusterIP service
```

## Testing KubeEphemeral

1. Push this repo to GitHub
2. Install the KubeEphemeral GitHub App
3. Create a Pull Request
4. KubeEphemeral should detect the K8s manifests and deploy them!

## Making Changes

To test PR updates, modify `k8s/deployment.yaml`:
- Change the replica count
- Change the nginx image tag
- Add environment variables
