# AGENTS.md

このファイルは、このリポジトリでコーディングエージェントがどのように作業すべきかを定義します。

## 目的

- このリポジトリは、WXT、Bun、TypeScript、そして任意で Nix を使った最小限のブラウザ拡張テンプレートとして扱ってください。
- 推測的な抽象化よりも、小さく、正確で、本番利用可能な変更を優先してください。
- タスクが明示的にそれ以上を求めていない限り、テンプレートの最小スコープを維持してください。

## リポジトリの前提情報

- パッケージマネージャー: `bun`
- ランタイム / ビルドツール: `wxt`
- 言語モード: ESM TypeScript
- 主な検証コマンド:
  - `bun run format:check`
  - `bun run lint`
  - `bun run test`
  - `bun run build`
  - `bun run check`

## 推奨されるコマンド選択

- 整形のみの変更: `bun run format`
- 単一の挙動 / ユニット変更: `bun run test`
- 型レベルまたは API 表面の変更: `bun run lint`
- Manifest / WXT / ビルド変更: `bun run build`
- 引き渡し前の信頼性確認 / タスク完了後、ユーザーに通知する前に実行: `bun run check`

## 環境とツール

- Nix の dev shell 内で作業している場合、依存関係はすでに用意されている可能性があると考えてください。
- `package.json` または `bun.lock` が変更された場合、dev shell が依存関係を自動更新する可能性がある点に注意してください。
- ビルド出力先は次を想定します:
  - `.output/chrome-mv3/`
  - `.output/firefox-mv2/`
- WXT がローカルのブラウザバイナリを見つけられない場合は、マシン固有のパスを直書きするのではなく、ドキュメント化された `web-ext.config.ts` の override パターンを優先してください。

## Commitルール

**conventional-commit** Skill を使ってなるべく分割してコミットすること

## コーディング規約

- 関数は **アロー関数** (`() => {}`) を使用すること
- テストファイルは `.spec.(ts|tsx)` という形式で作成すること
- テストスイートは `describe`、テストケースは `it` で記述すること
