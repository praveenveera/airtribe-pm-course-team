"""Generates a small set of pale, ghosted watermark icons used as background
motifs on the diagnosis and moat cards — decorative only, no data in them.
Drawn as simple line icons (matplotlib), pre-faded to a light tint so they
sit quietly behind the card's text. Run standalone: python3 make_icons_v3.py
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, FancyArrowPatch, Rectangle, Ellipse
import numpy as np

plt.rcParams["font.family"] = "Helvetica"

TINT = "#D9D4CC"     # pale warm gray — the ghosted-icon color on light cards
TINT_ON_DARK = "#3A3530"
LW = 5.5

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "icons")
os.makedirs(OUT_DIR, exist_ok=True)


def _fig():
    fig, ax = plt.subplots(figsize=(1.6, 1.6))
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.set_aspect("equal")
    ax.axis("off")
    return fig, ax


def save(fig, name):
    path = os.path.join(OUT_DIR, name)
    fig.savefig(path, dpi=200, transparent=True, bbox_inches="tight", pad_inches=0.05)
    plt.close(fig)
    print("saved", path)


def icon_target():
    fig, ax = _fig()
    for r in (4.3, 2.8, 1.3):
        ax.add_patch(Circle((5, 5), r, fill=False, edgecolor=TINT, linewidth=LW))
    ax.add_patch(Circle((5, 5), 0.35, color=TINT))
    save(fig, "positioning.png")


def icon_lock():
    fig, ax = _fig()
    ax.add_patch(Rectangle((2.3, 1.2), 5.4, 4.6, fill=False, edgecolor=TINT, linewidth=LW,
                            joinstyle="round"))
    theta = np.linspace(0, np.pi, 100)
    ax.plot(5 + 2.1 * np.cos(theta), 5.8 + 2.1 * np.sin(theta), color=TINT, linewidth=LW)
    ax.add_patch(Circle((5, 3.4), 0.55, color=TINT))
    save(fig, "access.png")


def icon_overlap():
    fig, ax = _fig()
    ax.add_patch(Circle((4.0, 5.5), 2.7, fill=False, edgecolor=TINT, linewidth=LW))
    ax.add_patch(Circle((6.5, 5.5), 2.7, fill=False, edgecolor=TINT, linewidth=LW))
    save(fig, "bundled.png")


def icon_mismatch():
    fig, ax = _fig()
    ax.add_patch(FancyArrowPatch((1.8, 3.2), (7.5, 6.8), arrowstyle="-|>", mutation_scale=28,
                                  color=TINT, linewidth=LW))
    ax.add_patch(FancyArrowPatch((8.2, 3.2), (2.5, 6.8), arrowstyle="-|>", mutation_scale=28,
                                  color=TINT, linewidth=LW))
    save(fig, "mismatch.png")


def icon_database():
    fig, ax = _fig()
    for cy in (2.6, 4.7, 6.8):
        ax.add_patch(Ellipse((5, cy), 6.4, 1.6, fill=False, edgecolor=TINT, linewidth=LW))
    ax.plot([1.8, 1.8], [2.6, 6.8], color=TINT, linewidth=LW)
    ax.plot([8.2, 8.2], [2.6, 6.8], color=TINT, linewidth=LW)
    save(fig, "eval_data.png")


def icon_shield():
    fig, ax = _fig()
    pts = np.array([[5, 8.7], [8.2, 7.3], [8.2, 3.8], [5, 1.0], [1.8, 3.8], [1.8, 7.3], [5, 8.7]])
    ax.plot(pts[:, 0], pts[:, 1], color=TINT, linewidth=LW, solid_joinstyle="round")
    ax.plot([3.2, 4.5, 7.0], [4.6, 3.2, 6.2], color=TINT, linewidth=LW,
            solid_capstyle="round", solid_joinstyle="round")
    save(fig, "action_contracts.png")


def icon_loop():
    fig, ax = _fig()
    theta = np.linspace(np.pi * 0.15, np.pi * 1.85, 100)
    r = 3.4
    xs, ys = 5 + r * np.cos(theta), 5 + r * np.sin(theta)
    ax.plot(xs, ys, color=TINT, linewidth=LW)
    ax.add_patch(FancyArrowPatch((xs[-2], ys[-2]), (xs[-1], ys[-1]), arrowstyle="-|>",
                                  mutation_scale=30, color=TINT, linewidth=LW))
    save(fig, "learning_loop.png")


def icon_layers():
    fig, ax = _fig()
    for i, cy in enumerate((2.6, 4.4, 6.2)):
        ax.add_patch(Rectangle((1.8 + i * 0.5, cy), 5.4, 2.0, fill=False, edgecolor=TINT, linewidth=LW))
    save(fig, "repeatable.png")


def icon_key():
    fig, ax = _fig()
    ax.add_patch(Circle((2.6, 7.2), 1.6, fill=False, edgecolor=TINT, linewidth=LW))
    start, end = np.array([3.9, 5.9]), np.array([8.6, 1.2])
    ax.plot([start[0], end[0]], [start[1], end[1]], color=TINT, linewidth=LW, solid_capstyle="round")
    # teeth: short segments perpendicular to the shaft, near its tip — this
    # is what separates a key silhouette from a plain magnifying glass.
    direction = (end - start) / np.linalg.norm(end - start)
    perp = np.array([-direction[1], direction[0]])
    for t in (0.68, 0.86):
        base = start + (end - start) * t
        tip = base + perp * 1.0
        ax.plot([base[0], tip[0]], [base[1], tip[1]], color=TINT, linewidth=LW, solid_capstyle="round")
    save(fig, "switching_cost.png")


if __name__ == "__main__":
    icon_target()
    icon_lock()
    icon_overlap()
    icon_mismatch()
    icon_database()
    icon_shield()
    icon_loop()
    icon_layers()
    icon_key()
