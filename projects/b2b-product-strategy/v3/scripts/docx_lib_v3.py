"""v2 report design system: charcoal/amber, grotesk sans, table-forward report.
Distinct from v1's report template and from the Nykaa-styled story deck."""

from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.enum.section import WD_SECTION

FONT = "Arial"
INK = RGBColor(0x1A, 0x1A, 0x1A)
AMBER = RGBColor(0xB5, 0x60, 0x12)
AMBER_DARK = RGBColor(0x8A, 0x48, 0x0B)
SLATE = RGBColor(0x5B, 0x64, 0x70)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_AMBER = "FBEBD9"
LIGHT_GRAY = "F2F1EF"
MID_GRAY = "E4E1DC"

PAGE_NUM = [0]


def new_document():
    doc = Document()
    section = doc.sections[0]
    section.page_height = Cm(29.7)
    section.page_width = Cm(21.0)
    section.top_margin = Cm(2.0)
    section.bottom_margin = Cm(2.0)
    section.left_margin = Cm(2.2)
    section.right_margin = Cm(2.2)
    style = doc.styles['Normal']
    style.font.name = FONT
    style.font.size = Pt(10.5)
    style.font.color.rgb = INK
    rpr = style.element.get_or_add_rPr()
    rFonts = rpr.find(qn('w:rFonts'))
    if rFonts is None:
        rFonts = OxmlElement('w:rFonts')
        rpr.append(rFonts)
    rFonts.set(qn('w:eastAsia'), FONT)
    return doc


def shade_cell(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tcPr.append(shd)


def set_cell_border(cell, **kwargs):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = OxmlElement('w:tcBorders')
    for edge in ('top', 'left', 'bottom', 'right'):
        if edge in kwargs:
            el = OxmlElement(f'w:{edge}')
            el.set(qn('w:val'), 'single')
            el.set(qn('w:sz'), str(kwargs[edge].get('sz', 4)))
            el.set(qn('w:color'), kwargs[edge].get('color', 'DDDDDD'))
            tcBorders.append(el)
    tcPr.append(tcBorders)


def cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    mar = OxmlElement('w:tcMar')
    for side, val in (('top', top), ('bottom', bottom), ('left', left), ('right', right)):
        node = OxmlElement(f'w:{side}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        mar.append(node)
    tcPr.append(mar)


def add_eyebrow(doc, text, color=AMBER):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run(text.upper())
    r.font.size = Pt(9.5)
    r.font.bold = True
    r.font.color.rgb = color
    r.font.name = FONT
    return p


def add_h1(doc, text, size=22):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(10)
    p.paragraph_format.space_before = Pt(2)
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.bold = True
    r.font.color.rgb = INK
    r.font.name = FONT
    return p


def add_h2(doc, text, size=14):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(6)
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.bold = True
    r.font.color.rgb = AMBER_DARK
    r.font.name = FONT
    return p


def add_body(doc, text, size=10.5, color=INK, italic=False, bold=False, space_after=8):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.18
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.color.rgb = color
    r.font.italic = italic
    r.font.bold = bold
    r.font.name = FONT
    return p


def add_bullets(doc, items, size=10.5):
    for item in items:
        p = doc.add_paragraph(style=None)
        p.paragraph_format.left_indent = Pt(14)
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.line_spacing = 1.15
        r = p.add_run("—  ")
        r.font.color.rgb = AMBER
        r.font.bold = True
        r.font.size = Pt(size)
        r.font.name = FONT
        r2 = p.add_run(item)
        r2.font.size = Pt(size)
        r2.font.color.rgb = INK
        r2.font.name = FONT


def add_callout(doc, label, text, bg=LIGHT_AMBER):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    shade_cell(cell, bg)
    cell_margins(cell, top=160, bottom=160, left=220, right=220)
    p = cell.paragraphs[0]
    p.paragraph_format.line_spacing = 1.15
    if label:
        r = p.add_run(label.upper() + "   ")
        r.font.bold = True
        r.font.size = Pt(9.5)
        r.font.color.rgb = AMBER_DARK
        r.font.name = FONT
    r2 = p.add_run(text)
    r2.font.bold = True
    r2.font.size = Pt(10.5)
    r2.font.color.rgb = INK
    r2.font.name = FONT
    # Same fix as add_table's cantSplit: without it, a callout that doesn't
    # fit at the bottom of a page splits its own paragraph text across the
    # page boundary instead of moving as one block — stranding its last
    # clause alone at the top of an otherwise-empty next page.
    trPr = table.rows[0]._tr.get_or_add_trPr()
    trPr.append(OxmlElement('w:cantSplit'))
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    return table


def add_table(doc, headers, rows, col_widths=None, body_size=9.5, header_size=9):
    n_cols = len(headers)
    table = doc.add_table(rows=len(rows) + 1, cols=n_cols)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    # header — amber-dark fill (on-brand), not flat black
    for c, h in enumerate(headers):
        cell = table.cell(0, c)
        shade_cell(cell, "8A480B")
        cell_margins(cell, top=90, bottom=90)
        p = cell.paragraphs[0]
        r = p.add_run(h.upper())
        r.font.bold = True
        r.font.size = Pt(header_size)
        r.font.color.rgb = WHITE
        r.font.name = FONT
    for ri, row in enumerate(rows):
        for c, val in enumerate(row):
            cell = table.cell(ri + 1, c)
            shade_cell(cell, LIGHT_AMBER if ri % 2 == 1 else "FFFFFF")
            cell_margins(cell, top=90, bottom=90)
            p = cell.paragraphs[0]
            p.paragraph_format.line_spacing = 1.1
            r = p.add_run(str(val))
            r.font.size = Pt(body_size)
            r.font.color.rgb = INK if c == 0 else SLATE
            r.font.bold = (c == 0)
            r.font.name = FONT
    if col_widths:
        for c, w in enumerate(col_widths):
            for row in table.rows:
                row.cells[c].width = Inches(w)
    # Keep each row intact across a page boundary instead of splitting it —
    # a split row otherwise strands its last wrapped line alone at the top
    # of the next page, right before a forced section break.
    for row in table.rows:
        trPr = row._tr.get_or_add_trPr()
        cant_split = OxmlElement('w:cantSplit')
        trPr.append(cant_split)
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    return table


def add_image(doc, path, width_in=6.4, caption=None):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run()
    r.add_picture(path, width=Inches(width_in))
    if caption:
        # Force the caption to stay on the same page as its image — without
        # this, a caption that doesn't fit under an image sitting at the
        # bottom of a page strands itself alone at the top of the next one.
        p.paragraph_format.keep_with_next = True
        cp = doc.add_paragraph()
        cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cp.paragraph_format.space_after = Pt(10)
        cr = cp.add_run(caption)
        cr.font.size = Pt(8.5)
        cr.font.italic = True
        cr.font.color.rgb = SLATE
        cr.font.name = FONT
    else:
        doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return p


def _badge_in_cell(cell, text, fill="8A480B", size_in=0.30):
    """A small filled square badge (nested 1x1 table) inside a card cell —
    the docx equivalent of the deck's add_number_badge."""
    bt = cell.add_table(rows=1, cols=1)
    bt.autofit = False
    bcell = bt.cell(0, 0)
    bcell.width = Inches(size_in)
    shade_cell(bcell, fill)
    cell_margins(bcell, top=60, bottom=60, left=0, right=0)
    bt.rows[0].height = Inches(size_in)
    p = bcell.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(text)
    r.font.bold = True
    r.font.size = Pt(11)
    r.font.color.rgb = WHITE
    r.font.name = FONT
    return bt


def add_card_grid(doc, cards, cols=2, badge_fill="8A480B", card_fill=None):
    """cards: list of {badge, title, body} dicts. Renders a borderless
    table of shaded, accent-topped cards — the docx equivalent of the
    deck's add_card, used for interview / vendor / moat profiles instead
    of cramming them into a dense table."""
    n = len(cards)
    rows_n = (n + cols - 1) // cols
    table = doc.add_table(rows=rows_n, cols=cols)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    for i, card in enumerate(cards):
        r, c = divmod(i, cols)
        cell = table.cell(r, c)
        fill = card_fill or (LIGHT_AMBER if i % 2 == 0 else LIGHT_GRAY)
        shade_cell(cell, fill)
        cell_margins(cell, top=180, bottom=180, left=220, right=220)
        set_cell_border(cell, top={'sz': 24, 'color': badge_fill})
        # clear the default empty paragraph, then badge + title on one line
        cell.paragraphs[0].text = ""
        head_p = cell.paragraphs[0]
        head_p.paragraph_format.space_after = Pt(4)
        if card.get('badge'):
            _badge_in_cell(cell, card['badge'], fill=badge_fill)
            # re-fetch: add_table appended after the paragraph; add a fresh title paragraph
            title_p = cell.add_paragraph()
        else:
            title_p = head_p
        title_p.paragraph_format.space_before = Pt(6) if card.get('badge') else Pt(0)
        title_p.paragraph_format.space_after = Pt(4)
        tr = title_p.add_run(card['title'])
        tr.font.bold = True
        tr.font.size = Pt(11)
        tr.font.color.rgb = INK
        tr.font.name = FONT
        body_p = cell.add_paragraph()
        body_p.paragraph_format.line_spacing = 1.15
        br = body_p.add_run(card['body'])
        br.font.size = Pt(9.5)
        br.font.color.rgb = SLATE
        br.font.name = FONT
    # pad any unfilled trailing cells so the grid doesn't show ragged borders
    for i in range(n, rows_n * cols):
        r, c = divmod(i, cols)
        shade_cell(table.cell(r, c), "FFFFFF")
    for row in table.rows:
        row._tr.get_or_add_trPr().append(OxmlElement('w:cantSplit'))
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return table


def add_rule(doc, color="B56012"):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(10)
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single')
    bottom.set(qn('w:sz'), '18')
    bottom.set(qn('w:space'), '1')
    bottom.set(qn('w:color'), color)
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def add_footer_text(section, left_text):
    footer = section.footer
    p = footer.paragraphs[0] if footer.paragraphs else footer.add_paragraph()
    p.text = ""
    r = p.add_run(left_text)
    r.font.size = Pt(8.5)
    r.font.color.rgb = SLATE
    r.font.name = FONT
    # page number field on the right via tab stop
    p.paragraph_format.tab_stops.add_tab_stop(Inches(6.3))
    tab_run = p.add_run("\t")
    fld_begin = OxmlElement('w:fldChar')
    fld_begin.set(qn('w:fldCharType'), 'begin')
    instr = OxmlElement('w:instrText')
    instr.set(qn('xml:space'), 'preserve')
    instr.text = "PAGE"
    fld_end = OxmlElement('w:fldChar')
    fld_end.set(qn('w:fldCharType'), 'end')
    run_el = OxmlElement('w:r')
    rpr = OxmlElement('w:rPr')
    sz = OxmlElement('w:sz')
    sz.set(qn('w:val'), '17')
    color = OxmlElement('w:color')
    color.set(qn('w:val'), '5B6470')
    rpr.append(sz)
    rpr.append(color)
    run_el.append(rpr)
    run_el.append(fld_begin)
    run_el.append(instr)
    run_el.append(fld_end)
    p._p.append(run_el)


def add_page_break(doc):
    doc.add_page_break()
