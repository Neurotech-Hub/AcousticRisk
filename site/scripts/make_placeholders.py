#!/usr/bin/env python3
"""Write labeled placeholder PNGs into site/public/graphics/.

Each placeholder has the exact filename and pixel size of the final artwork, so
replacing one is just saving ChatGPT's output under the same name (prompts are
in site/GRAPHICS.md).

Existing files are never overwritten, so real artwork is safe. Pass --force to
rewrite the placeholders themselves.

    python3 scripts/make_placeholders.py
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "graphics"

PAPER = (247, 245, 238, 255)  # --bg
INK = (22, 42, 46, 255)  # --text
MUTED = (85, 101, 106, 255)  # --text-2
RULE = (215, 221, 216, 255)  # --border
ACCENT = (35, 91, 87, 255)  # --accent

# name, (w, h), transparent?, one-line description, label anchor ("c" center, "r" right)
ART = [
    ("hero-field.png", (2400, 900), False, "Hero: rodent on a rock in grassland, open space at left", "r"),
    ("rodent-forage.png", (800, 600), True, "Rodent sprite: foraging", "c"),
    ("rodent-vigilant.png", (800, 600), True, "Rodent sprite: upright, scanning", "c"),
    ("rodent-freeze.png", (800, 600), True, "Rodent sprite: frozen", "c"),
    ("rodent-flee.png", (800, 600), True, "Rodent sprite: fleeing", "c"),
    ("scene-field.png", (2400, 700), False, "Scene: burrow at left, open ground, food patch at right", "c"),
    ("scene-lab.png", (1200, 700), False, "Scene: empty enclosure, no refuge", "c"),
    ("species-rat.png", (600, 600), True, "Portrait: rat", "c"),
    ("species-spinymouse.png", (600, 600), True, "Portrait: spiny mouse", "c"),
    ("species-vole.png", (600, 600), True, "Portrait: vole", "c"),
    ("species-groundsquirrel.png", (600, 600), True, "Portrait: ground squirrel", "c"),
    ("og-image.png", (1200, 630), False, "Social share card, clear region for the mark", "r"),
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for path in (
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        try:
            return ImageFont.truetype(path, size, index=1 if bold and path.endswith(".ttc") else 0)
        except OSError:
            continue
    return ImageFont.load_default(size)


def dashed_rect(d: ImageDraw.ImageDraw, box, color, width: int, dash: int, gap: int) -> None:
    x0, y0, x1, y1 = box
    x = x0
    while x < x1:
        d.line([(x, y0), (min(x + dash, x1), y0)], fill=color, width=width)
        d.line([(x, y1), (min(x + dash, x1), y1)], fill=color, width=width)
        x += dash + gap
    y = y0
    while y < y1:
        d.line([(x0, y), (x0, min(y + dash, y1))], fill=color, width=width)
        d.line([(x1, y), (x1, min(y + dash, y1))], fill=color, width=width)
        y += dash + gap


def make(name: str, size: tuple[int, int], transparent: bool, note: str, anchor: str) -> Image.Image:
    w, h = size
    unit = min(w, h)
    img = Image.new("RGBA", size, (0, 0, 0, 0) if transparent else PAPER)
    d = ImageDraw.Draw(img)

    if not transparent:
        step = max(24, unit // 22)
        for k in range(-h, w, step):
            d.line([(k, 0), (k + h, h)], fill=RULE, width=max(1, unit // 400))

    inset = max(10, unit // 40)
    dashed_rect(d, (inset, inset, w - inset, h - inset), MUTED, max(2, unit // 300), unit // 40, unit // 60)

    # label card
    title_f = font(max(18, unit // 22), bold=True)
    body_f = font(max(14, unit // 34))
    lines = [("PLACEHOLDER", title_f, ACCENT), (name, title_f, INK), (f"{w} x {h} px" + (", transparent" if transparent else ""), body_f, MUTED), (note, body_f, MUTED), ("Replace using the prompt in site/GRAPHICS.md", body_f, MUTED)]
    pad = unit // 28
    widths = [d.textlength(t, font=f) for t, f, _ in lines]
    heights = [f.size * 1.35 for _, f, _ in lines]
    cw, ch = int(max(widths) + 2 * pad), int(sum(heights) + 2 * pad)
    cx = (w - cw) // 2 if anchor == "c" else w - cw - inset * 3
    cy = (h - ch) // 2
    d.rounded_rectangle((cx, cy, cx + cw, cy + ch), radius=pad // 2, fill=(255, 255, 255, 235), outline=MUTED, width=max(2, unit // 300))
    y = cy + pad
    for (t, f, c), th in zip(lines, heights):
        d.text((cx + pad, y), t, font=f, fill=c)
        y += th
    return img


def main() -> None:
    force = "--force" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)
    for name, size, transparent, note, anchor in ART:
        path = OUT / name
        if path.exists() and not force:
            print(f"kept     {name}")
            continue
        make(name, size, transparent, note, anchor).save(path, optimize=True)
        print(f"wrote    {name}  {size[0]}x{size[1]}")


if __name__ == "__main__":
    main()
