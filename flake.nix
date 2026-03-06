{
  description = "Browser Extension Template development shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
          ];

          shellHook = ''
            stamp_file=".local/dev-shell/bun-install.hash"

            ensure_bun_dependencies() {
              if [ ! -f package.json ] || [ ! -f bun.lock ]; then
                return
              fi

              mkdir -p .local/dev-shell

              current_hash="$(cat package.json bun.lock | cksum | awk '{print $1}')"
              previous_hash=""

              if [ -f "$stamp_file" ]; then
                previous_hash="$(cat "$stamp_file")"
              fi

              if [ -d node_modules ] && [ "$current_hash" = "$previous_hash" ]; then
                return
              fi

              echo "Installing Bun dependencies..."
              bun install --frozen-lockfile
              printf '%s' "$current_hash" > "$stamp_file"
            }

            ensure_bun_dependencies
          '';
        };
      }
    );
}
