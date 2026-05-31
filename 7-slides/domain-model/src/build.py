#!/usr/bin/env python3
"""Builder for the Domain Model Excalidraw deck (Russian, zero-IT audience).

One frame = one slide. Frames are laid out in a grid; Excalidraw presentation
mode plays them in array order. Content spec lives in FRAMES below — edit there
and re-run to regenerate the .excalidraw file.
"""
import json, os

OUT = os.path.join(os.path.dirname(__file__), "..", "domain-model.excalidraw")

# ---- layout ----
FW, FH = 1600, 900          # frame size
GAP = 280
COLS = 4

# ---- palette (from skill color-palette.md) ----
TITLE   = "#1e40af"
SUB     = "#3b82f6"
BODY    = "#334155"
MUTED   = "#64748b"
# concept accents (fill / stroke / text-on-fill)
ENTITY  = ("#3b82f6", "#1e3a5f", "#ffffff")   # primary blue
VO      = ("#a7f3d0", "#047857", "#064e3b")   # green = interchangeable/safe
AGG     = ("#fef3c7", "#b45309", "#7c2d12")   # amber = decision/boundary
ROOT    = ("#ddd6fe", "#6d28d9", "#4c1d95")   # purple = gatekeeper
WARN    = ("#fee2e2", "#dc2626", "#7f1d1d")   # rule/warning
NEUTRAL = ("#e2e8f0", "#64748b", "#334155")

_seed = [1000]
def seed():
    _seed[0] += 7
    return _seed[0]

els = []

def _base(t, fid):
    return {"type": t, "angle": 0, "fillStyle": "solid", "strokeWidth": 2,
            "strokeStyle": "solid", "roughness": 0, "opacity": 100, "groupIds": [],
            "frameId": fid, "roundness": None, "seed": seed(), "version": 1,
            "versionNonce": seed(), "isDeleted": False, "boundElements": [],
            "updated": 1, "link": None, "locked": False}

def _twh(text, fs):
    lines = text.split("\n")
    w = max(len(l) for l in lines) * fs * 0.58
    h = len(lines) * fs * 1.25
    return w, h

def text(fid, fx, fy, lx, ly, s, fs=26, color=BODY, align="left", w=None, anchor="tl"):
    """Free-floating text. anchor 'center' -> lx,ly is the center point."""
    tw, th = _twh(s, fs)
    if w: tw = w
    x = fx + lx
    y = fy + ly
    if anchor == "center":
        x -= tw / 2; y -= th / 2
    e = _base("text", fid)
    e.update({"id": f"t{seed()}", "x": x, "y": y, "width": tw, "height": th,
              "strokeColor": color, "backgroundColor": "transparent",
              "text": s, "originalText": s, "fontSize": fs, "fontFamily": 2,
              "textAlign": align if align != "center" else "center",
              "verticalAlign": "top", "containerId": None, "lineHeight": 1.25})
    els.append(e)
    return e

def box(fid, fx, fy, lx, ly, w, h, label, accent=NEUTRAL, fs=26, rounded=True, dashed=False):
    fill, stroke, txtc = accent
    rid = f"r{seed()}"
    r = _base("rectangle", fid)
    r.update({"id": rid, "x": fx + lx, "y": fy + ly, "width": w, "height": h,
              "strokeColor": stroke, "backgroundColor": fill,
              "strokeStyle": "dashed" if dashed else "solid",
              "roundness": {"type": 3} if rounded else None})
    if label:
        tid = f"bt{seed()}"
        r["boundElements"] = [{"id": tid, "type": "text"}]
        tw, th = _twh(label, fs)
        t = _base("text", fid)
        t.update({"id": tid, "x": fx + lx + (w - tw) / 2, "y": fy + ly + (h - th) / 2,
                  "width": tw, "height": th, "strokeColor": txtc,
                  "backgroundColor": "transparent", "text": label, "originalText": label,
                  "fontSize": fs, "fontFamily": 2, "textAlign": "center",
                  "verticalAlign": "middle", "containerId": rid, "lineHeight": 1.25})
        els.append(r); els.append(t)
    else:
        els.append(r)
    return rid

def arrow(fid, fx, fy, x1, y1, x2, y2, color=MUTED, head="arrow", dashed=False):
    e = _base("arrow", fid)
    e.update({"id": f"a{seed()}", "x": fx + x1, "y": fy + y1,
              "width": x2 - x1, "height": y2 - y1, "strokeColor": color,
              "backgroundColor": "transparent",
              "strokeStyle": "dashed" if dashed else "solid",
              "points": [[0, 0], [x2 - x1, y2 - y1]],
              "startBinding": None, "endBinding": None,
              "startArrowhead": None, "endArrowhead": head})
    els.append(e)

def line(fid, fx, fy, x1, y1, x2, y2, color=MUTED, dashed=False, w=2):
    e = _base("line", fid)
    e.update({"id": f"l{seed()}", "x": fx + x1, "y": fy + y1,
              "width": x2 - x1, "height": y2 - y1, "strokeColor": color,
              "backgroundColor": "transparent", "strokeWidth": w,
              "strokeStyle": "dashed" if dashed else "solid",
              "points": [[0, 0], [x2 - x1, y2 - y1]]})
    els.append(e)

frames = []
def frame(name):
    i = len(frames)
    col, row = i % COLS, i // COLS
    fx, fy = col * (FW + GAP), row * (FH + GAP)
    fid = f"frame{i+1}"
    f = _base("frame", fid)
    f.update({"id": fid, "x": fx, "y": fy, "width": FW, "height": FH,
              "frameId": None, "strokeColor": "#ced4da",
              "backgroundColor": "transparent", "roundness": None, "name": name})
    frames.append(f)
    return fid, fx, fy

# helper: section eyebrow + title
def head(fid, fx, fy, eyebrow, title, tcolor=TITLE):
    text(fid, fx, fy, FW/2, 70, eyebrow, 24, MUTED, anchor="center")
    text(fid, fx, fy, FW/2, 130, title, 52, tcolor, anchor="center")

def rule(fid, fx, fy, lx, ly, w, s, fs=28):
    box(fid, fx, fy, lx, ly, w, max(90, _twh(s, fs)[1] + 50), s, WARN, fs=fs)

# =====================================================================
# FRAMES
# =====================================================================

# 01 Title
fid, fx, fy = frame("01 Title")
text(fid, fx, fy, FW/2, 300, "Доменная модель", 76, TITLE, anchor="center")
text(fid, fx, fy, FW/2, 430, "Из чего собран бизнес внутри системы", 34, SUB, anchor="center")
line(fid, fx, fy, FW/2-260, 500, FW/2+260, 500, SUB)
text(fid, fx, fy, FW/2, 560, "Модуль: Data Modeling", 24, MUTED, anchor="center")

# 02 Hook
fid, fx, fy = frame("02 Hook")
text(fid, fx, fy, 140, 90, "Ситуация", 26, MUTED)
text(fid, fx, fy, 140, 180, "Аналитик пишет в ТЗ:", 30, BODY)
box(fid, fx, fy, 140, 250, 900, 90, "«Заказ оплачен  →  заказ отправлен»", NEUTRAL, fs=30)
text(fid, fx, fy, FW/2, 470, "Но что такое «заказ»?", 50, TITLE, anchor="center")
text(fid, fx, fy, FW/2, 580, "Один объект? Список строк? Кто отвечает за правила?", 28, BODY, anchor="center")
text(fid, fx, fy, FW/2, 720, "Доменная модель — общий язык аналитика и разработчика\nо том, ЧТО есть вещи в системе.", 26, SUB, align="center", anchor="center")

# 03 Bridge general
fid, fx, fy = frame("03 Bridge")
head(fid, fx, fy, "Аналогия", "Система = макет бизнеса из деталей")
box(fid, fx, fy, 180, 320, 560, 360, "", ENTITY)
text(fid, fx, fy, 460, 380, "Детали с «личностью»", 30, "#ffffff", anchor="center")
text(fid, fx, fy, 460, 470, "паспорт, заказ, клиент", 24, "#e0ec ff".replace(" ", ""), anchor="center")
text(fid, fx, fy, 460, 560, "их отслеживаем\nпоимённо", 26, "#ffffff", align="center", anchor="center")
box(fid, fx, fy, 860, 320, 560, 360, "", VO)
text(fid, fx, fy, 1140, 380, "Взаимозаменяемые детали", 30, VO[2], anchor="center")
text(fid, fx, fy, 1140, 470, "деньги, адрес, дата", 24, VO[2], anchor="center")
text(fid, fx, fy, 1140, 560, "важна только суть,\nне «какая именно»", 26, VO[2], align="center", anchor="center")

# 04 Socratic 1
fid, fx, fy = frame("04 Socratic-1")
text(fid, fx, fy, FW/2, 120, "Вопрос", 26, MUTED, anchor="center")
text(fid, fx, fy, FW/2, 400, "Иван сменил имя, адрес и телефон.\nЭто тот же человек — или новый?", 46, TITLE, align="center", anchor="center")
text(fid, fx, fy, FW/2, 700, "(подумай 10 секунд)", 24, MUTED, anchor="center")

# 05 Entity concept
fid, fx, fy = frame("05 Entity")
head(fid, fx, fy, "Концепт 1", "Entity — Сущность", ENTITY[1])
text(fid, fx, fy, FW/2, 250, "Объект, который определяется постоянной идентичностью,\nа не своими значениями.", 30, BODY, align="center", anchor="center")
# passport card
box(fid, fx, fy, 540, 400, 520, 300, "", ENTITY)
text(fid, fx, fy, 580, 430, "ПАСПОРТ", 26, "#ffffff")
text(fid, fx, fy, 580, 500, "Имя:  Иван → Иоанн", 24, "#e8f0ff")
text(fid, fx, fy, 580, 550, "Адрес: меняется", 24, "#e8f0ff")
text(fid, fx, fy, 580, 620, "№ 1234  ← не меняется", 26, "#fde68a")
text(fid, fx, fy, FW/2, 770, "Иван остаётся Иваном, пока не меняется его «номер» (id).", 26, SUB, anchor="center")

# 06 Entity equality / lifecycle
fid, fx, fy = frame("06 Entity-lifecycle")
head(fid, fx, fy, "Сущность", "Равенство — по идентичности", ENTITY[1])
text(fid, fx, fy, FW/2, 250, "Состояние меняется во времени — объект тот же.", 28, BODY, anchor="center")
xs = [200, 530, 860, 1190]
labels = ["PLACED", "PAID", "SHIPPED", "DELIVERED"]
for i, (xx, lb) in enumerate(zip(xs, labels)):
    box(fid, fx, fy, xx, 380, 210, 80, lb, ENTITY, fs=24)
    if i < 3:
        arrow(fid, fx, fy, xx+210, 420, xs[i+1], 420, ENTITY[1])
text(fid, fx, fy, FW/2, 520, "Заказ № 77 — один и тот же на всех этапах", 24, MUTED, anchor="center")
rule(fid, fx, fy, 360, 620, 880, "Две сущности равны, только если совпадают их идентичности.")

# 07 Value Object concept
fid, fx, fy = frame("07 ValueObject")
head(fid, fx, fy, "Концепт 2", "Value Object — Объект-значение", VO[1])
text(fid, fx, fy, FW/2, 250, "Объект без идентичности: определяется только\nсвоими значениями.", 30, BODY, align="center", anchor="center")
box(fid, fx, fy, 470, 420, 290, 200, "100 $", VO, fs=44)
text(fid, fx, fy, FW/2, 520, "=", 60, BODY, anchor="center")
box(fid, fx, fy, 840, 420, 290, 200, "100 $", VO, fs=44)
text(fid, fx, fy, FW/2, 700, "Две купюры по 100 $ — одно и то же. Нет «той самой».", 26, SUB, anchor="center")
text(fid, fx, fy, FW/2, 780, "Деньги · Адрес · Период дат", 24, MUTED, anchor="center")

# 08 VO immutable
fid, fx, fy = frame("08 VO-immutable")
head(fid, fx, fy, "Объект-значение", "Равенство — по значению; неизменяем", VO[1])
text(fid, fx, fy, FW/2, 260, "Money(100, USD)  =  Money(100, USD)  → одно и то же", 30, BODY, anchor="center")
text(fid, fx, fy, FW/2, 360, "«Изменить» = создать новое значение, а не править старое.", 28, BODY, anchor="center")
rule(fid, fx, fy, 300, 470, 1000, "Value Object неизменяем (immutable) → им безопасно делиться.")
text(fid, fx, fy, FW/2, 700, "Нет жизненного цикла, нет своей строки в базе, нечего «портить».", 24, MUTED, anchor="center")

# 09 Comparison Entity vs VO
fid, fx, fy = frame("09 Compare-Entity-VO")
head(fid, fx, fy, "Как выбрать", "Сущность vs Объект-значение")
cols = [(300, "", NEUTRAL), (720, "Entity", ENTITY), (1100, "Value Object", VO)]
rows = ["Идентичность", "Равенство", "Меняется?", "Пример"]
data = [["есть", "нет"], ["по id", "по значению"], ["да, во времени", "нет, неизменяем"], ["Клиент, Заказ", "Деньги, Адрес"]]
y0 = 260; rh = 110
box(fid, fx, fy, 700, y0, 360, 80, "Entity", ENTITY, fs=28)
box(fid, fx, fy, 1080, y0, 360, 80, "Value Object", VO, fs=28)
for r, name in enumerate(rows):
    yy = y0 + 90 + r*rh
    text(fid, fx, fy, 200, yy+30, name, 26, TITLE)
    box(fid, fx, fy, 700, yy, 360, 90, data[r][0], (ENTITY[0], ENTITY[1], "#ffffff"), fs=24)
    box(fid, fx, fy, 1080, yy, 360, 90, data[r][1], VO, fs=24)
text(fid, fx, fy, FW/2, 830, "Вопрос-ключ: нужно ли отслеживать ЭТУ конкретную вещь во времени?", 24, SUB, anchor="center")

# 10 Section check 1
fid, fx, fy = frame("10 Check-1")
head(fid, fx, fy, "Проверь себя", "Сущность и значение")
qs = ["1.  Чем сущность отличается от объекта-значения?",
      "2.  «Адрес доставки» — сущность или значение? Почему?",
      "3.  Клиент изменил email. Это тот же клиент?"]
for i, q in enumerate(qs):
    text(fid, fx, fy, 220, 300 + i*120, q, 32, BODY)

# 11 Socratic 2
fid, fx, fy = frame("11 Socratic-2")
text(fid, fx, fy, FW/2, 120, "Вопрос", 26, MUTED, anchor="center")
text(fid, fx, fy, FW/2, 400, "Можно ли менять одну строку заказа,\nне трогая сам заказ?", 46, TITLE, align="center", anchor="center")

# 12 Aggregate concept
fid, fx, fy = frame("12 Aggregate")
head(fid, fx, fy, "Концепт 3", "Aggregate — Агрегат", AGG[1])
text(fid, fx, fy, FW/2, 250, "Группа объектов, которую система меняет как единое целое.", 30, BODY, anchor="center")
box(fid, fx, fy, 520, 340, 560, 380, "", AGG)
text(fid, fx, fy, 800, 375, "ЗАКАЗ № 77", 30, AGG[2], anchor="center")
for i, it in enumerate(["Позиция 1", "Позиция 2", "Позиция 3"]):
    box(fid, fx, fy, 580, 440 + i*85, 440, 70, it, ("#ffffff", AGG[1], AGG[2]), fs=24)
text(fid, fx, fy, FW/2, 770, "Правило «сумма заказа = сумма позиций» держится ВНУТРИ.", 26, SUB, anchor="center")

# 13 Aggregate rule
fid, fx, fy = frame("13 Aggregate-rule")
head(fid, fx, fy, "Агрегат", "Граница согласованности", AGG[1])
rule(fid, fx, fy, 360, 250, 880, "Одна транзакция меняет один агрегат.")
text(fid, fx, fy, FW/2, 430, "Внутри агрегата — согласовано сразу (атомарно).", 28, BODY, anchor="center")
text(fid, fx, fy, FW/2, 500, "Между агрегатами — через события, не одной транзакцией.", 28, BODY, anchor="center")
text(fid, fx, fy, FW/2, 640, "Размер агрегата — настолько мал, насколько позволяет правило.", 26, MUTED, anchor="center")

# 14 Aggregate root concept
fid, fx, fy = frame("14 Aggregate-root")
head(fid, fx, fy, "Концепт 4", "Aggregate Root — Корень агрегата", ROOT[1])
text(fid, fx, fy, FW/2, 250, "Единственный объект агрегата, на который ссылаются снаружи.", 30, BODY, anchor="center")
box(fid, fx, fy, 620, 360, 360, 110, "ЗАКАЗ (корень)", ROOT, fs=28)
arrow(fid, fx, fy, 300, 415, 620, 415, ROOT[1])
text(fid, fx, fy, 300, 360, "запросы\nснаружи", 24, MUTED)
for i, it in enumerate(["Позиция 1", "Позиция 2"]):
    box(fid, fx, fy, 660, 540 + i*85, 280, 70, it, ("#ffffff", ROOT[1], ROOT[2]), fs=24)
    arrow(fid, fx, fy, 800, 470, 800, 540 + i*85, ROOT[1])
text(fid, fx, fy, FW/2, 790, "К позициям — только через заказ.", 26, SUB, anchor="center")

# 15 Root rule
fid, fx, fy = frame("15 Root-rule")
head(fid, fx, fy, "Корень агрегата", "Единственная дверь", ROOT[1])
box(fid, fx, fy, 200, 280, 520, 200, "", WARN)
text(fid, fx, fy, 460, 320, "НЕЛЬЗЯ", 26, WARN[1], anchor="center")
text(fid, fx, fy, 460, 390, "позиция.изменить()", 26, WARN[2], anchor="center")
box(fid, fx, fy, 880, 280, 520, 200, "", VO)
text(fid, fx, fy, 1140, 320, "ПРАВИЛЬНО", 26, VO[1], anchor="center")
text(fid, fx, fy, 1140, 390, "заказ.изменитьКоличество()", 24, VO[2], anchor="center")
rule(fid, fx, fy, 300, 560, 1000, "Все изменения идут через корень → один ответственный за правила.")

# 16 Domain vs Data bridge
fid, fx, fy = frame("16 Domain-vs-Data-bridge")
head(fid, fx, fy, "Концепт 5", "Поведение vs Хранение")
box(fid, fx, fy, 180, 320, 560, 380, "", ENTITY)
text(fid, fx, fy, 460, 360, "РЕЦЕПТ", 30, "#ffffff", anchor="center")
text(fid, fx, fy, 460, 450, "как блюдо\nготовится и ведёт себя", 26, "#e8f0ff", align="center", anchor="center")
text(fid, fx, fy, 460, 600, "= доменная модель\n(поведение + правила)", 24, "#fde68a", align="center", anchor="center")
box(fid, fx, fy, 860, 320, 560, 380, "", AGG)
text(fid, fx, fy, 1140, 360, "СПИСОК НА СКЛАДЕ", 28, AGG[2], anchor="center")
text(fid, fx, fy, 1140, 450, "что и где лежит,\nв каких ячейках", 26, AGG[2], align="center", anchor="center")
text(fid, fx, fy, 1140, 600, "= data-модель\n(таблицы, связи)", 24, AGG[2], align="center", anchor="center")
text(fid, fx, fy, FW/2, 760, "Таблицы и связи подробно разберём в ERD / SQL.", 24, SUB, anchor="center")

# 17 Domain vs Data compare
fid, fx, fy = frame("17 Domain-vs-Data-table")
head(fid, fx, fy, "Две модели — два вопроса", "Domain model vs Data model")
y0 = 250; rh = 100
box(fid, fx, fy, 640, y0, 360, 75, "Доменная", ENTITY, fs=26)
box(fid, fx, fy, 1020, y0, 360, 75, "Data", AGG, fs=26)
rows = ["Цель", "Единица", "Содержит", "Равенство"]
d = [["поведение + правила", "хранение + выборка"],
     ["агрегат", "таблица / строка"],
     ["методы, правила", "столбцы, ключи"],
     ["id или значение", "первичный ключ"]]
for r, name in enumerate(rows):
    yy = y0 + 85 + r*rh
    text(fid, fx, fy, 200, yy+25, name, 24, TITLE)
    box(fid, fx, fy, 640, yy, 360, 82, d[r][0], (ENTITY[0], ENTITY[1], "#ffffff"), fs=22)
    box(fid, fx, fy, 1020, yy, 360, 82, d[r][1], AGG, fs=22)
text(fid, fx, fy, FW/2, 770, "Один агрегат = часто несколько таблиц. Объект-значение = часто без своей таблицы.", 22, MUTED, anchor="center")

# 18 Section check 2
fid, fx, fy = frame("18 Check-2")
head(fid, fx, fy, "Проверь себя", "Агрегаты и модели")
qs = ["1.  Что такое агрегат и зачем нужна его граница?",
      "2.  Почему снаружи нельзя дёргать позицию заказа напрямую?",
      "3.  Чем доменная модель отличается от data-модели?"]
for i, q in enumerate(qs):
    text(fid, fx, fy, 220, 300 + i*120, q, 32, BODY)

# 19 Recap
fid, fx, fy = frame("19 Recap")
head(fid, fx, fy, "Запомни", "Доменная модель — словарь вещей и правил")
items = [("Entity", "постоянная идентичность; равенство по id", ENTITY),
         ("Value Object", "без идентичности; по значению; неизменяем", VO),
         ("Aggregate", "меняем как одно целое; граница правил", AGG),
         ("Aggregate Root", "единственная дверь; изменения через него", ROOT),
         ("Domain vs Data", "поведение vs хранение", NEUTRAL)]
for i, (term, desc, acc) in enumerate(items):
    yy = 270 + i*115
    box(fid, fx, fy, 180, yy, 360, 85, term, acc, fs=26)
    text(fid, fx, fy, 580, yy+28, desc, 26, BODY)

# 20 End
fid, fx, fy = frame("20 End")
text(fid, fx, fy, FW/2, 340, "Доменная модель = словарь вещей и правил бизнеса", 38, TITLE, align="center", anchor="center")
text(fid, fx, fy, FW/2, 470, "Дальше: ERD — как это превращается в таблицы", 30, SUB, anchor="center")

# =====================================================================
doc = {"type": "excalidraw", "version": 2, "source": "https://excalidraw.com",
       "elements": frames + els,
       "appState": {"viewBackgroundColor": "#ffffff", "gridSize": None},
       "files": {}}
with open(OUT, "w", encoding="utf-8") as f:
    json.dump(doc, f, ensure_ascii=False, indent=1)
print(f"wrote {os.path.abspath(OUT)}  ({len(frames)} frames, {len(els)} elements)")
