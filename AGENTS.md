# Browser Extension Template

このファイルは、このリポジトリでコーディングエージェントがどのように作業すべきかを定義します。

## 目的

- このリポジトリは、WXT、React、Bun、TypeScript、そして Nix を使ったブラウザ拡張テンプレートとして扱ってください。
- 現在のテンプレートには React popup、background の ping/pong 疎通確認、`bun run init` による初期化フロー、Chrome / Firefox 向けの build / zip、GitHub Actions の検証が含まれます。
- タスクが明示的にそれ以上を求めていない限り、テンプレートの最小スコープを維持してください。権限、content scripts、options page、storage、ブラウザ固有分岐は必要になったときだけ追加してください。

## リポジトリの前提情報

- パッケージマネージャー: `bun`
- ランタイム / ビルドツール: `wxt`
- UI: React
- 言語モード: ESM TypeScript
- 標準作業環境: `nix develop`
- ビルド対象:
  - Chrome: MV3
  - Firefox: MV2

## 現在の実装

- `entrypoints/background.ts`: install 時のログ出力と、typed message による ping/pong 応答を行います。
- `entrypoints/popup/*`: React popup を描画し、background 接続確認 UI を提供します。
- `lib/template-metadata.ts`: 拡張機能名、説明、アイコンパスを管理します。
- `lib/template-protocol.ts`: popup/background 間の typed messaging を管理します。
- `scripts/init.ts`: テンプレート名、表示名、protocol 識別子、関連ファイル名を新しいプロジェクト名へ置換します。
- `tests/*.spec.ts`: background、protocol、WXT config の最小保証を持ちます。
- `.github/workflows/ci.yml`: format / lint / test / build を行い、`main` push 時に zip artifact を生成します。

## 推奨されるコマンド選択

**重要**: 以下のコマンドは `nix develop` 上で実行すること

- ローカル開発: `bun run dev`、必要なら `bun run dev:chrome` または `bun run dev:firefox`
- 整形のみの変更: `bun run format`
- 単一の挙動 / ユニット変更: `bun run test`
- 型レベルまたは API 表面の変更: `bun run lint`
- Manifest / WXT / ビルド変更: `bun run build`
- GitHub Actions / workflow 変更: `bun run lint:gha`
- 配布物やパッケージングの確認: `bun run zip`
- 引き渡し前の信頼性確認 / タスク完了後、ユーザーに通知する前に実行: `bun run check`

## 環境とツール

- 標準環境は `nix develop` です。dev shell には `bun`、`actionlint`、`ghalint`、`zizmor` が含まれます。
- `package.json` または `bun.lock` が変更された場合、dev shell が依存関係を自動更新する可能性があります。
- `postinstall` で `wxt prepare` が走ります。型生成や `.wxt/` が古いときは `bun install` を優先してください。
- ビルド出力先は次を想定します:
  - `.output/chrome-mv3/`
  - `.output/firefox-mv2/`

## テンプレート保守の注意

- テンプレート名、protocol 名、metadata、または初期化フローを変えるときは、`scripts/init.ts`、`lib/template-*.ts`、`README.md`、関連テストをまとめて更新してください。
- `bun run init <project-name>` は fresh clone で一度だけ動かす前提です。テンプレート置換の対象や rename 対象を変える場合は、その前提を壊さないでください。
- popup/background 間の message type は `lib/template-protocol.ts` に集約してください。呼び出し側へ生文字列を増やさないでください。
- Manifest や WXT 設定を変えるときは、Chrome MV3 と Firefox MV2 の両方を維持してください。
- zip や CI に関わる変更では、`.github/workflows/ci.yml` と `.output/*.zip` の生成フローも合わせて確認してください。

## Commitルール

**conventional-commit** Skill を使ってなるべく分割してコミットすること

## コーディング規約

- 新規または変更する通常コードでは、関数は **アロー関数** (`() => {}`) を優先してください。
- テストファイルは `.spec.(ts|tsx)` という形式で作成すること
- テストスイートは `describe`、テストケースは `it` で記述すること
- Vitest の globals は無効です。`describe`、`it`、`expect`、`vi` は `vitest` から明示 import してください。
