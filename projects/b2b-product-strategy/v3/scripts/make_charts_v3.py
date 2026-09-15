"""Generates the v3 chart assets (matplotlib, brand-colored, transparent
background) shared by the report and the deck. Every number here traces to
a claim already made in STRATEGY_MEMO.md / build_report_v3.py — this script
draws them, it does not invent them. Run standalone: python3 make_charts_v3.py
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
from matplotlib.patches import FancyBboxPatch

plt.rcParams["font.family"] = "Helvetica"
plt.rcParams["font.size"] = 13

INK = "#1A1A1A"
AMBER = "#B56012"
AMBER_DARK = "#8A480B"
SLATE = "#5B6470"
LIGHT_AMBER = "#FBEBD9"
LIGHT_GRAY = "#F2F1EF"
LINE = "#E4E1DC"

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
os.makedirs(OUT_DIR, exist_ok=True)


def save(fig, name, w, h):
    fig.set_size_inches(w, h)
    path = os.path.join(OUT_DIR, name)
    fig.savefig(path, dpi=220, transparent=True, bbox_inches="tight", pad_inches=0.08)
    plt.close(fig)
    print("saved", path)


def strip_axes(ax):
    for s in ("top", "right", "left"):
        ax.spines[s].set_visible(False)
    ax.tick_params(left=False)


# ---------------------------------------------------------------- 1. MARKET
def market_chart():
    fig, ax = plt.subplots()
    rows = [
        ("Bottom-up cost pool\n(NEW · illustrative)", 0.43, 0.86, AMBER),
        ("Help-desk software", 14.3, 14.3, SLATE),
        ("Contact-center software", 47.7, 63.9, INK),
    ]
    ax.set_xscale("log")
    for i, (label, lo, hi, color) in enumerate(rows):
        if hi > lo:
            ax.plot([lo, hi], [i, i], color=color, lw=10, solid_capstyle="round", zorder=2)
            ax.scatter([lo, hi], [i, i], color=color, s=170, zorder=3)
            ax.text((lo * hi) ** 0.5, i + 0.32, f"${lo:g}–{hi:g}B", ha="center",
                     fontsize=13, fontweight="bold", color=color)
        else:
            ax.scatter([lo], [i], color=color, s=220, zorder=3)
            ax.text(lo, i + 0.32, f"${lo:g}B", ha="center", fontsize=13, fontweight="bold", color=color)
    ax.set_yticks(range(len(rows)))
    ax.set_yticklabels([r[0] for r in rows], fontsize=12.5, color=INK)
    ax.set_xlim(0.25, 100)
    ax.set_ylim(-0.6, len(rows) - 0.3)
    ax.set_xlabel("US$ billions / year — log scale (the two scales differ ~100x)", fontsize=10.5, color=SLATE)
    ax.xaxis.set_ticks([0.5, 1, 5, 14.3, 50])
    ax.xaxis.set_ticklabels(["0.5", "1", "5", "14.3", "50"])
    ax.tick_params(colors=SLATE, labelsize=10)
    strip_axes(ax)
    ax.grid(axis="x", color=LINE, linewidth=0.8, zorder=0)
    save(fig, "market_chart.png", 8.6, 3.0)


# -------------------------------------------------------------- 2. ROADMAP
def roadmap_timeline():
    fig, ax = plt.subplots()
    phases = [
        ("Prove", 0, 6, AMBER, "≥4 customers, same workflow\n≥2 paid/committed pilots"),
        ("Repeat", 6, 12, "#A0561A", "Faster repeat deploys\nretention, margin"),
        ("Expand", 12, 24, "#6E4A2A", "Usage/renewal pull\ncross-workflow repeat"),
        ("Platform", 24, 36, INK, "Expansion without\ncustom-project economics"),
    ]
    # Gate/annotation text gets equal-width columns regardless of each
    # bar's (very unequal) duration, so a short "Prove" segment's caption
    # doesn't spill into "Repeat" next to it.
    label_x = [4.5, 13.5, 22.5, 31.5]
    for (label, start, end, color, gate), lx in zip(phases, label_x):
        ax.barh(0, end - start, left=start, height=0.62, color=color, edgecolor="white", linewidth=2, zorder=2)
        mid = (start + end) / 2
        ax.text(mid, 0, label.upper(), ha="center", va="center", fontsize=12,
                fontweight="bold", color="white", zorder=3)
        ax.text(lx, -0.62, f"{start}–{end} mo", ha="center", va="top", fontsize=9.5, color=SLATE)
        ax.text(lx, 0.85, gate, ha="center", va="bottom", fontsize=8.6, color=INK, linespacing=1.4)
    ax.set_xlim(-1, 37)
    ax.set_ylim(-1.15, 2.15)
    ax.axis("off")
    save(fig, "roadmap_timeline.png", 10.6, 3.5)


# --------------------------------------------------------- 3. ADOPTION MOTION
def adoption_motion_chart():
    """Land -> Control -> Prove -> Expand: the sourced four-stage adoption
    motion, each stage a precondition for the next, with its real sub-bullets."""
    fig, ax = plt.subplots()
    stages = [
        ("LAND", ["One segment", "One helpdesk", "One system", "One workflow"], AMBER),
        ("CONTROL", ["Read only", "Shadow mode", "Human approval"], "#A0561A"),
        ("PROVE", ["Durable resolution", "Safety", "Effort", "Total cost"], "#6E4A2A"),
        ("EXPAND", ["Automation", "Workflow variants", "Systems", "Adjacent teams"], INK),
    ]
    n = len(stages)
    box_w, box_h = 1.9, 2.5
    gap = 0.55
    total_w = n * box_w + (n - 1) * gap
    start_x = -total_w / 2
    for i, (label, bullets, color) in enumerate(stages):
        x0 = start_x + i * (box_w + gap)
        box = FancyBboxPatch((x0, 0), box_w, box_h, boxstyle="round,pad=0.02,rounding_size=0.08",
                              linewidth=0, facecolor=color, zorder=2)
        ax.add_patch(box)
        ax.text(x0 + box_w / 2, box_h - 0.42, label, ha="center", va="top", fontsize=14,
                fontweight="bold", color="white", zorder=3)
        bullet_text = "\n".join(bullets)
        ax.text(x0 + box_w / 2, box_h - 0.85, bullet_text, ha="center", va="top", fontsize=9,
                color="white", zorder=3, linespacing=1.9)
        if i < n - 1:
            ax.annotate("", xy=(x0 + box_w + gap - 0.08, box_h / 2), xytext=(x0 + box_w + 0.08, box_h / 2),
                        arrowprops=dict(arrowstyle="-|>", color=SLATE, lw=2))
    ax.text(0, -0.35, "Measured workload reduction and reliable outcomes create the pull to expand — a platform mandate on its own does not.",
            ha="center", va="top", fontsize=9.3, color=SLATE, style="italic")
    ax.set_xlim(start_x - 0.3, start_x + total_w + 0.3)
    ax.set_ylim(-0.9, box_h + 0.2)
    ax.axis("off")
    save(fig, "adoption_motion_chart.png", 10.4, 3.4)


# ------------------------------------------------- 4. COMPETITIVE POSITION
def competitive_positioning():
    """Reproduces the sourced competitive map (four incumbents only) rather
    than plotting an unbuilt product's position with false precision — the
    wedge conclusion is carried in the surrounding text, not on this chart."""
    fig, ax = plt.subplots()
    incumbents = [
        ("Intercom / Fin", 0.80, 0.32, (0, 14)),
        ("Zendesk AI", 0.62, 0.74, (0, 14)),
        ("Freshdesk / Freddy AI", 0.44, 0.44, (0, -22)),
        ("Salesforce / Agentforce", 0.34, 0.88, (0, 14)),
    ]
    for name, x, y, offset in incumbents:
        ax.scatter([x], [y], s=420, color=SLATE, alpha=0.85, zorder=3, edgecolor="white", linewidth=1.5)
        ax.annotate(name, (x, y), xytext=offset, textcoords="offset points",
                    ha="center", fontsize=9.3, color=INK, fontweight="bold")
    ax.axvline(0.5, color=LINE, linewidth=1)
    ax.axhline(0.5, color=LINE, linewidth=1)
    ax.text(0.25, 0.97, "SYSTEM OF RECORD AND\nENTERPRISE WORKFLOW", ha="center", va="top", fontsize=8, color=SLATE,
            fontweight="bold", style="italic", linespacing=1.3)
    ax.text(0.75, 0.03, "CONVERSATION AND AI ENTRY", ha="center", fontsize=8, color=SLATE,
            fontweight="bold", style="italic")
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_xlabel("AI-first proposition — low to high", fontsize=10, color=SLATE)
    ax.set_ylabel("Operational platform breadth — low to high", fontsize=10, color=SLATE)
    ax.set_xticks([])
    ax.set_yticks([])
    for s in ax.spines.values():
        s.set_color(LINE)
    ax.text(0.5, -0.14, "Positions are directional, synthesized from each vendor's own positioning and packaging — not measured scores.",
            ha="center", va="top", fontsize=8.3, color=SLATE, style="italic", transform=ax.transAxes)
    save(fig, "competitive_positioning.png", 7.4, 5.6)


# --------------------------------------------------------- 5. INTERVIEW PAIN
def pain_time_chart():
    fig, axes = plt.subplots(1, 2, gridspec_kw={"width_ratios": [1, 1.4]})

    ax = axes[0]
    ax.bar([0], [125], width=0.5, color=AMBER, zorder=2)
    ax.text(0, 130, "100–150 min/day\n(calculated)", ha="center", fontsize=9.3, color=INK, fontweight="bold")
    ax.set_xlim(-0.7, 0.7)
    ax.set_ylim(0, 165)
    ax.set_xticks([0])
    ax.set_xticklabels(["P01 — context work\nacross 5–6 cases/day"], fontsize=9, color=INK)
    ax.set_ylabel("Minutes / day", fontsize=9.5, color=SLATE)
    strip_axes(ax)
    ax.tick_params(colors=SLATE, labelsize=9)

    ax2 = axes[1]
    vals = [15, 300]
    labels = ["Duplicate\nlogging", "Formal approval\nwait (4–6 hr)"]
    ax2.bar([0, 1], vals, width=0.5, color=[SLATE, AMBER_DARK], zorder=2)
    ax2.text(0, vals[0] + 8, "15 min", ha="center", fontsize=9.3, color=INK, fontweight="bold")
    ax2.text(1, vals[1] + 8, "4–6 hr", ha="center", fontsize=9.3, color=INK, fontweight="bold")
    ax2.set_xticks([0, 1])
    ax2.set_xticklabels(labels, fontsize=9, color=INK)
    ax2.set_ylim(0, 340)
    ax2.set_ylabel("Minutes", fontsize=9.5, color=SLATE)
    ax2.set_xlabel("P02 — regulated-banking complaint case", fontsize=9, color=INK, labelpad=8)
    strip_axes(ax2)
    ax2.tick_params(colors=SLATE, labelsize=9)

    fig.text(0.5, -0.12, "Self-reported, single case each — not a market average.",
              ha="center", fontsize=8.6, color=SLATE, style="italic")
    fig.subplots_adjust(wspace=0.45)
    save(fig, "pain_time_chart.png", 8.4, 3.2)


if __name__ == "__main__":
    market_chart()
    roadmap_timeline()
    adoption_motion_chart()
    competitive_positioning()
    pain_time_chart()
