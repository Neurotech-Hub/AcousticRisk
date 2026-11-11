"""Generate labeled placeholder PNGs for figures not yet drawn.

Overwrite these files with real artwork using the same filenames.
Run from the repository root: python3 scripts/make_placeholders.py
"""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

OUT = Path("manuscript/figures")

PLACEHOLDERS = {
    "fig1_framework_placeholder.png": (
        "Figure 1 — Receiver-centered framework",
        [
            "A: Acoustic detection → Biological interpretation → Action selection → Updating",
            "    feedback from Updating to Interpretation; dissociation marks between levels",
            "    inputs: prior experience, ecological context, caller identity & reliability",
            "    costs (missed threat vs false alarm) enter at Action selection",
            "    dashed = hypothesized (timing); solid = established",
            "B: Meaning depends on experience (four receiver types)",
        ],
    ),
    "fig2_temporal_placeholder.png": (
        "Figure 2 — Temporal dynamics (hypothetical curves)",
        [
            "A: Within-session decline — natural vs control × fixed vs variable timing",
            "B: Recovery after rest — natural recovers more than control",
            "C: Caller reliability — discount vs scrutinize; new caller restores response",
            "D: Risk allocation — vigilance per alarm vs frequency of high-risk periods",
        ],
    ),
}


def draw(path: Path, title: str, lines: list[str]) -> None:
    fig = plt.figure(figsize=(8, 5), dpi=150)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_axis_off()
    ax.add_patch(FancyBboxPatch((0.03, 0.04), 0.94, 0.92, boxstyle="round,pad=0.01",
                                fill=False, linestyle="--", linewidth=1.5, edgecolor="0.5"))
    ax.text(0.5, 0.86, "PLACEHOLDER", ha="center", fontsize=22, color="0.6", weight="bold")
    ax.text(0.5, 0.76, title, ha="center", fontsize=14)
    for i, line in enumerate(lines):
        ax.text(0.07, 0.62 - i * 0.085, line, ha="left", fontsize=10, color="0.25")
    ax.text(0.5, 0.08, "Prompt: docs/FIGURE_PROMPTS.md", ha="center", fontsize=9, color="0.5")
    fig.savefig(path)
    plt.close(fig)


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for name, (title, lines) in PLACEHOLDERS.items():
        target = OUT / name
        if target.exists():
            print(f"skip (exists): {target}")
            continue
        draw(target, title, lines)
        print(f"wrote {target}")
