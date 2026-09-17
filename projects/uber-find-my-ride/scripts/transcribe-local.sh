#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 <local-media-file> [language-code]" >&2
  echo "Example: $0 .local-transcription/input/video.mp4 te" >&2
  exit 2
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_dir="$(cd "${script_dir}/.." && pwd)"
runtime_dir="${project_dir}/.local-transcription"
whisper_cli="${runtime_dir}/venv/bin/mlx_whisper"
model="mlx-community/whisper-large-v3-turbo"
input_file="$1"
language_code="${2:-}"

if [[ ! -f "${input_file}" ]]; then
  echo "Input file not found: ${input_file}" >&2
  exit 1
fi

if [[ ! -x "${whisper_cli}" ]]; then
  echo "MLX Whisper is not installed at ${whisper_cli}" >&2
  echo "See research/local-transcription-workflow.md for setup instructions." >&2
  exit 1
fi

mkdir -p "${runtime_dir}/output" "${runtime_dir}/hf-cache"

filename="$(basename "${input_file}")"
output_name="${filename%.*}"

args=(
  "${input_file}"
  --model "${model}"
  --task transcribe
  --word-timestamps True
  --output-dir "${runtime_dir}/output"
  --output-format all
  --output-name "${output_name}"
)

if [[ -n "${language_code}" ]]; then
  args+=(--language "${language_code}")
fi

HF_HOME="${runtime_dir}/hf-cache" "${whisper_cli}" "${args[@]}"

echo "Provisional transcript files: ${runtime_dir}/output/${output_name}.*"
echo "Manually verify any excerpt before using it as assignment evidence."
