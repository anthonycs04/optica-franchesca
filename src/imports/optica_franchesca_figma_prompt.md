# Prompt para Figma Make — Óptica Franchesca Landing Page

## INSTRUCCIÓN MAESTRA

Diseña y construye la landing page completa de **Óptica Franchesca**, una óptica familiar con más de 24 años de trayectoria en Tacna, Perú. La web debe sentirse **moderna, elegante, premium accesible y emocionalmente conectada** con el legado familiar. No es una plantilla genérica: es una marca con historia, confianza y evolución generacional.

---

## IDENTIDAD VISUAL DE MARCA

### Paleta de color exacta
```
--color-primary:     #F5C518   /* Amarillo marca — dominante */
--color-secondary:   #8B1A4A   /* Buganvilla / vino profundo */
--color-accent:      #C2185B   /* Rosado intenso — detalles */
--color-white:       #FFFFFF
--color-dark:        #1A1A1A   /* Textos principales */
--color-gray:        #6B6B6B   /* Textos secundarios */
--color-light:       #FDF8F0   /* Fondo cálido suave */
--color-overlay:     rgba(26, 10, 20, 0.72)  /* Overlay oscuro sobre imágenes */
```

**Proporción visual:** 70% amarillo · 20% buganvilla · 10% blanco y neutros.

### Tipografía
```
--font-display:  'Playfair Display', serif       /* Títulos principales — elegancia */
--font-heading:  'Cormorant Garamond', serif     /* Subtítulos — sofisticación */
--font-body:     'DM Sans', sans-serif           /* Cuerpo de texto — legibilidad */
--font-label:    'DM Sans', sans-serif           /* Labels, botones, microtextos */
```

### Logo
El logo de Óptica Franchesca tiene:
- Texto "Óptica Franchesca" en gris plateado
- Ícono de ojo estilizado en buganvilla (#8B1A4A) con pupila en amarillo (#F5C518)
- Ceja curva decorativa en buganvilla sobre el texto
- **Usar logo con fondo transparente (PNG) en header y footer**
- En fondos oscuros: versión en blanco + buganvilla + amarillo

### Principios de diseño
- Fondo base: blanco roto (#FDF8F0) — no blanco puro
- Secciones alternadas: blanco cálido y amarillo muy suave (#FFFBEF)
- Cards con sombra ligera: `box-shadow: 0 4px 24px rgba(139,26,74,0.08)`
- Border radius: 12px para cards, 8px para botones, 24px para elementos hero
- Sin bordes agresivos ni colores saturados en exceso
- Animaciones: `ease-out`, duración 0.4s–0.6s, sin efectos de rebote exagerados

---

## ESTILOS DE BOTONES

### Botón primario (CTA principal)
```
background: #F5C518
color: #1A1A1A
font: DM Sans 500 15px
padding: 14px 28px
border-radius: 8px
border: none
hover: background #E0B010, transform translateY(-1px)
```

### Botón secundario (WhatsApp)
```
background: transparent
color: #8B1A4A
border: 1.5px solid #8B1A4A
font: DM Sans 500 15px
padding: 13px 27px
border-radius: 8px
hover: background #8B1A4A, color white
```

### Botón ghost (sobre fondos oscuros)
```
background: transparent
color: white
border: 1.5px solid rgba(255,255,255,0.6)
hover: background rgba(255,255,255,0.12)
```

---

## ESTRUCTURA COMPLETA DE LA LANDING

---

### 1. HEADER / MENÚ STICKY

**Layout:** Full width · height 72px · sticky top · z-index 1000

**Fondo:** Blanco con `backdrop-filter: blur(12px)` y `background: rgba(255,255,255,0.92)`

**Border inferior:** `1px solid rgba(245,197,24,0.25)` (amarillo sutil)

**Contenido (de izquierda a derecha):**
- Logo Óptica Franchesca (PNG transparente) — 160px ancho
- Menú central: Inicio · Nosotros · Servicios · Monturas · Diferenciales · Testimonios · Contacto
  - Font: DM Sans 400 14px · color #1A1A1A
  - Hover: color #8B1A4A · underline amarillo 2px debajo
- Botón CTA derecho: "Agendar evaluación" — amarillo primario
- Ícono WhatsApp secundario (verde #25D366) al lado del CTA

**Mobile (< 768px):**
- Logo izquierda + hamburger icon derecha (3 líneas, color #1A1A1A)
- Menú desplegable: panel completo desde arriba, fondo blanco, items apilados
- Botón WhatsApp flotante fijo en esquina inferior derecha (FAB circular, verde)

---

### 2. HERO PRINCIPAL

**Layout:** Grid 2 columnas (55% texto · 45% imagen) · altura 88vh máximo · fondo #FDF8F0

**Columna izquierda (texto):**

Microtexto badge:
```
"Más de 24 años en Tacna"
Fondo: #F5C518 · Texto: #1A1A1A · Border-radius: 20px · Font: DM Sans 600 12px · padding: 6px 16px · uppercase tracking-wider
```

Título principal H1:
```
"Más de 24 años
cuidando la visión
de las familias
tacneñas"
Font: Playfair Display · 58px · color #1A1A1A · line-height 1.15
La palabra "familias" en color #8B1A4A
```

Subtítulo:
```
"Óptica Franchesca une legado familiar, atención por optometrista y monturas de tendencia para ayudarte a ver mejor con confianza y estilo."
Font: DM Sans 400 · 18px · color #6B6B6B · max-width 480px · line-height 1.65
```

Trust badges en línea horizontal:
```
[ 👁 Legado familiar ] [ ✓ Optometrista ] [ ✦ Monturas de tendencia ]
Font: DM Sans 500 13px · separados por punto buganvilla · color #8B1A4A
```

Botones:
```
[ Agendar evaluación visual ]  (primario amarillo)
[ Ver monturas ]  (secundario borde buganvilla)
gap: 12px · margin-top: 32px
```

**Columna derecha (imagen):**
- Contenedor con `border-radius: 24px` y recorte circular/orgánico suave
- Degradado izquierda→derecha: `from(#FDF8F0) to(transparent)` superpuesto sobre la imagen desde el borde izquierdo
- Imagen de la fundadora con la madre — transmite legado y familia
- Detalle decorativo: arco o curva fina en amarillo (#F5C518) detrás de la imagen como elemento gráfico
- Sombra suave: `box-shadow: 0 20px 60px rgba(139,26,74,0.15)`

**Indicador de scroll:** Flecha animada hacia abajo, color #8B1A4A, posición centrada inferior

---

### 3. SECCIÓN CONFIANZA PREMIUM

**Fondo:** Blanco roto #FDF8F0

**Título:** "Confianza que se ve, experiencia que se siente" — Playfair Display 42px #1A1A1A · text-align center

**Subtítulo:** "Más de dos décadas acompañando a familias tacneñas con atención cercana, profesional y personalizada." — DM Sans 16px #6B6B6B · text-align center · max-width 580px centrado

**Formato DESKTOP — Accordion horizontal de imágenes (4 cards):**

Cada card:
```
Estado colapsado: width ~120px · height 420px · overflow hidden
Estado expandido (hover/active): width ~440px · transición width 0.5s ease
Imagen de fondo con object-fit: cover
Overlay: linear-gradient(to top, rgba(26,10,20,0.85) 0%, rgba(26,10,20,0.2) 60%)
```

Texto en estado colapsado:
```
Número rotado 90° vertical: "01", "02", "03", "04"
Font: Playfair Display Italic 18px · color rgba(255,255,255,0.7)
```

Texto en estado expandido:
```
Ícono SVG outline blanco · 32px · margin-bottom 12px
Título: Cormorant Garamond 26px white bold
Descripción: DM Sans 14px · color rgba(255,255,255,0.85) · max 2 líneas
Detalle inferior: línea horizontal en #F5C518 · 40px wide
```

Cards:
1. **+24 años de trayectoria** — imagen: fachada tienda o foto histórica
2. **Atención por optometrista** — imagen: profesional en consulta
3. **Monturas de tendencia** — imagen: display de monturas/vitrina
4. **Asesoría personalizada** — imagen: cliente eligiendo lentes

**MOBILE:** Convertir en carrusel swipeable con dots de navegación en amarillo

---

### 4. SECCIÓN NOSOTROS / LEGADO GENERACIONAL

**Fondo:** Blanco

**Layout:** Grid 2 columnas (imagen izquierda · texto derecha)

**Columna imagen — Comparación Before/After:**
```
Componente split-view:
- Foto antigua (izquierda) con label "Nuestros orígenes" en badge amarillo
- Foto actual (derecha) con label "Hoy, más que nunca" en badge buganvilla
- Separador central draggable (línea fina #F5C518 + handle circular)
- Ambas imágenes: border-radius 20px · height 480px
- Overlay suave en foto antigua: sepia(30%) para dar sensación de historia
```

**Columna texto:**

Badge superior:
```
"Nuestra historia"
Border-left: 3px solid #F5C518 · padding-left: 12px · Font: DM Sans 600 12px uppercase tracking · color #8B1A4A
```

Título H2:
```
"Una historia familiar que sigue evolucionando"
Playfair Display · 42px · color #1A1A1A · line-height 1.2
```

Texto narrativo:
```
"Óptica Franchesca nace como un proyecto familiar dedicado al cuidado visual de las familias tacneñas. Con más de 24 años de trayectoria, hoy continúa bajo una nueva generación que mantiene la confianza de siempre, incorporando una imagen más moderna, atención por optometrista y una experiencia más cercana para cada cliente."
DM Sans · 16px · #6B6B6B · line-height 1.7
```

Timeline vertical compacto (4 items):
```
Ícono punto circular #F5C518 + línea vertical #E8D5A3
Item 1: "Fundación familiar" — "Una visión de servicio y cuidado visual nace en Tacna"
Item 2: "+10 años de confianza" — "Familias tacneñas que vuelven generación tras generación"
Item 3: "Nueva generación" — "La hija toma las riendas con una visión más moderna"
Item 4: "Hoy" — "24+ años, atención profesional y monturas de tendencia"
Font items: DM Sans · título 14px bold · descripción 13px #6B6B6B
```

Frase destacada:
```
"La confianza de siempre, con una nueva visión para el futuro."
Cormorant Garamond Italic · 24px · color #8B1A4A
Border-left: 3px solid #F5C518 · padding-left: 20px · margin: 28px 0
```

---

### 5. SECCIÓN SERVICIOS — CARRUSEL CENTRADO

**Fondo:** Amarillo muy suave `#FFFBEF` con patrón geométrico sutil (líneas diagonales muy tenues en #F5C518 opacity 0.08)

**Título:** "Servicios pensados para cuidar tu visión" — Playfair Display 42px #1A1A1A · centrado

**Subtítulo:** "Te acompañamos desde la evaluación visual hasta la elección de tus lentes ideales." — DM Sans 16px #6B6B6B · centrado

**Carrusel fade/scale centrado:**
```
Slide activo (centro): width 480px · opacity 1 · scale 1
Slides laterales: width 320px · opacity 0.5 · scale 0.88 · blur(1px)
Transición: opacity + transform · duration 0.4s ease-out
```

Cada slide card:
```
background: white
border-radius: 20px
padding: 40px 36px
box-shadow: 0 8px 40px rgba(139,26,74,0.1)
Número: "01" en Playfair Display Italic 80px color rgba(245,197,24,0.15) — decorativo
Ícono SVG outline: 40px · color #8B1A4A
Título servicio: Cormorant Garamond 28px · color #1A1A1A
Descripción: DM Sans 15px · color #6B6B6B · line-height 1.65
Línea inferior decorativa: 48px · 2px · color #F5C518
```

Servicios (7 slides):
1. **Atención por optometrista** — ícono: ojo/lupa profesional
2. **Medida de vista** — ícono: optotipo/letras examen
3. **Asesoría en monturas** — ícono: gafas/montura
4. **Lentes oftálmicos** — ícono: lente circular
5. **Lentes de sol** — ícono: sol con gafas
6. **Lentes de contacto** — ícono: gota/lente contacto
7. **Ajuste y mantenimiento** — ícono: herramienta/ajuste

Navegación:
```
Flechas: círculos 48px · borde 1.5px #8B1A4A · ícono chevron · hover: fondo #8B1A4A ícono blanco
Dots: 8px círculos · activo: 24px pill amarillo · inactivo: gris claro
```

Botón inferior centrado:
```
[ Agendar evaluación visual ]  (primario amarillo, talla grande)
[ Consultar por WhatsApp ]  (secundario borde buganvilla)
gap: 16px · margin-top: 40px
```

---

### 6. SECCIÓN LOOKBOOK DE MONTURAS

**Fondo:** Blanco

**Título:** "Lookbook de monturas" — Playfair Display 48px · con detalle "de monturas" en color #8B1A4A

**Subtítulo:** "Explora monturas que combinan estilo, comodidad y calidad visual para cada personalidad." — DM Sans 16px #6B6B6B · centrado

**Grid editorial asimétrico (desktop):**

Layout en 2 columnas principales con cards de distintos tamaños:
```
Fila 1: Card grande izquierda (2/3 ancho · 380px alto) + Card pequeña derecha (1/3 ancho · 380px alto)
Fila 2: 3 cards iguales de 1/3 ancho · 280px alto
gap: 16px
```

Cada card:
```
border-radius: 16px
overflow: hidden
position: relative
cursor: pointer

Imagen de fondo (placeholder): object-fit cover · width 100% · height 100%
Overlay base: linear-gradient(to top, rgba(26,10,20,0.75) 0%, transparent 55%)
Overlay hover: rgba(139,26,74,0.5) transition opacity 0.3s

Contenido inferior (siempre visible):
  - Categoría label: badge pill blanco semitransparente · Font DM Sans 500 11px uppercase
  - Título: Cormorant Garamond 22px white · line-height 1.2
  - Descripción: DM Sans 13px · rgba(255,255,255,0.8) · visible solo en card grande

Contenido hover (aparece con translate):
  - Botón CTA: "Consultar por WhatsApp" · fondo #F5C518 · texto #1A1A1A · border-radius 6px · padding 10px 20px
  - Flecha →
```

Categorías (5 cards):
1. **Monturas oftálmicas** (card grande) — "Para uso diario, trabajo, estudio y actividades cotidianas." · CTA: "Consultar por WhatsApp"
2. **Monturas de tendencia** (card pequeña) — "Diseños modernos para renovar tu imagen." · CTA: "Ver modelos"
3. **Marcas exclusivas** — "Opciones seleccionadas para una experiencia más premium." · CTA: "Consultar disponibilidad"
4. **Lentes de sol** — "Protección visual con diseño y estilo." · CTA: "Ver opciones"
5. **Lunas oftálmicas** — "Filtro azul, UV, descanso y más." · CTA: "Solicitar orientación"

**Mobile:** Cards apiladas en columna única con altura fija 240px, swipe horizontal en fila 1

---

### 7. SECCIÓN DIFERENCIALES

**Fondo:** `#1A0A14` (oscuro buganvilla profundo) con textura grain sutil y patrón de puntos muy tenues

**Título:** "¿Por qué elegir Óptica Franchesca?" — Playfair Display 48px white · centrado
**Subtítulo:** "No solo vendemos lentes, cuidamos tu visión con experiencia, cercanía y atención profesional." — DM Sans 16px rgba(255,255,255,0.65) · centrado

**Grid de cards (3 columnas · 2 filas = 6 cards):**

Cada card:
```
background: rgba(255,255,255,0.06)
border: 1px solid rgba(245,197,24,0.2)
border-radius: 16px
padding: 32px 28px
backdrop-filter: blur(8px)
hover: background rgba(245,197,24,0.1) · border-color rgba(245,197,24,0.5) · transform translateY(-4px)
transition: all 0.3s ease

Ícono SVG outline: 36px · color #F5C518 · margin-bottom 16px
Título: Cormorant Garamond 22px white font-weight 600
Descripción: DM Sans 14px · color rgba(255,255,255,0.65) · line-height 1.65
```

Una card destacada (la de "Premium accesible"):
```
background: #F5C518
border: none
Ícono: color #8B1A4A
Título: color #1A1A1A
Descripción: color rgba(26,26,26,0.75)
```

Cards (6):
1. **+24 años de experiencia** — ícono: medalla/trofeo — "Una marca con trayectoria y confianza en Tacna."
2. **Atención por optometrista** — ícono: ojo con lupa — "Evaluación visual con enfoque profesional y personalizado."
3. **Legado familiar** — ícono: corazón/casa — "Una óptica construida sobre cercanía, compromiso y confianza de generaciones."
4. **Asesoría personalizada** — ícono: persona/chat — "Te orientamos para elegir lentes que se adapten a tu rostro, estilo y necesidad."
5. **Monturas modernas y exclusivas** — ícono: gafas estrella — "Modelos seleccionados para quienes buscan calidad, comodidad y estilo."
6. **Premium accesible** *(card destacada amarilla)* — ícono: diamante/corona — "Una experiencia más cuidada y profesional sin sentirse inalcanzable."

**Brand Statement (debajo del grid):**
```
Contenedor: border-top 1px solid rgba(245,197,24,0.3) · margin-top 56px · padding-top 56px

Texto:
"En Óptica Franchesca combinamos legado familiar, atención por optometrista y monturas de tendencia para ayudarte a ver mejor con confianza, estilo y cercanía."

Font: Cormorant Garamond Italic · 32px · color white · text-align center · max-width 760px · margin auto · line-height 1.5

Decoración: comillas tipográficas grandes en #F5C518 opacity 0.3, posición absolute detrás del texto
```

---

### 8. SECCIÓN TESTIMONIOS

**Fondo:** Blanco roto #FDF8F0

**Título:** "La confianza de nuestros clientes nos respalda" — Playfair Display 42px #1A1A1A · centrado
**Subtítulo:** "Familias tacneñas que han confiado en Óptica Franchesca durante años." — DM Sans 16px #6B6B6B · centrado

**Carrusel de testimonios (auto-play 4s · pausa en hover):**

Cada card testimonio:
```
background: white
border-radius: 20px
padding: 36px 32px
box-shadow: 0 4px 24px rgba(139,26,74,0.08)
border: 1px solid rgba(245,197,24,0.2)
width: 380px (desktop) · 300px (tablet) · full width -32px (mobile)

Comillas decorativas: Playfair Display 80px · color #F5C518 · opacity 0.4 · top -8px left 20px
Texto testimonio: Cormorant Garamond Italic 20px · color #1A1A1A · line-height 1.55
Estrellas: 5 estrellas llenas · color #F5C518 · font-size 14px · margin-bottom 8px
Avatar: círculo 48px · fondo buganvilla suave · iniciales en Playfair Display 18px blanco
Nombre: DM Sans 600 14px · color #1A1A1A
Detalle: DM Sans 12px · color #8B1A4A · "Cliente frecuente · Tacna"
```

3 testimonios referenciales:
1. *"Mi familia compra en Óptica Franchesca desde hace años. Siempre nos atienden con paciencia y confianza."* — **M.R.** · Cliente frecuente · Tacna
2. *"Me ayudaron a elegir unas monturas que iban con mi rostro y mi estilo. Muy buena atención."* — **L.F.** · Tacna
3. *"La atención fue cercana y profesional. Me explicaron bien qué lentes necesitaba."* — **C.V.** · Familia Tacneña

Dots de navegación: círculos 8px · activo pill 24px amarillo

---

### 9. SECCIÓN CONTACTO + UBICACIÓN

**Fondo:** Blanco

**Título centrado:** "Contáctanos o visítanos en Tacna" — Playfair Display 42px #1A1A1A
**Subtítulo:** "Déjanos tus datos, agenda tu evaluación visual o visítanos para recibir una atención personalizada." — DM Sans 16px #6B6B6B · centrado

**Layout: Grid 2 columnas (formulario izquierda · mapa+info derecha)**

**Columna izquierda — Formulario:**
```
Contenedor: background white · border-radius 20px · padding 40px · box-shadow 0 4px 32px rgba(139,26,74,0.08)

Labels: DM Sans 500 13px · color #1A1A1A · margin-bottom 6px

Inputs:
  border: 1.5px solid #E8D5A3
  border-radius: 8px
  padding: 12px 16px
  font: DM Sans 400 14px
  focus: border-color #F5C518 · outline none · box-shadow 0 0 0 3px rgba(245,197,24,0.2)
  background: #FAFAFA

Select (motivo de consulta):
  Mismos estilos que input
  Opciones:
    - Quiero agendar una evaluación visual
    - Quiero consultar por monturas
    - Quiero información sobre lentes de sol
    - Quiero renovar mis lentes
    - Quiero consultar por precios
    - Otro motivo

Textarea (mensaje): min-height 100px · resize vertical

Select (preferencia de contacto): WhatsApp · Llamada · Correo

Botón submit (full width):
  background: #F5C518
  padding: 15px
  border-radius: 8px
  font: DM Sans 600 15px
  color: #1A1A1A
  hover: #E0B010

Mensaje post-envío:
  Ícono check verde
  "Gracias por contactarte con Óptica Franchesca. Nos comunicaremos contigo pronto para ayudarte con tu consulta."
  Font: DM Sans 14px · color #1A1A1A
```

**Columna derecha — Información + Mapa:**
```
Mapa embed de Google Maps (iframe) · border-radius 16px · height 280px · width 100%

Info debajo del mapa (lista con íconos):
  [ 📍 ] Dirección: [Dirección exacta de Óptica Franchesca, Tacna, Perú]
  [ 🕐 ] Horario: Lunes a sábado 9:00 – 20:00 · Domingo 10:00 – 14:00
  [ 📱 ] WhatsApp: [Número]
  [ 📸 ] Instagram · TikTok

Font: DM Sans 14px · ícono color #8B1A4A · texto #1A1A1A

Botones inferiores:
  [ 📍 Cómo llegar ] (secundario borde buganvilla · abre Google Maps)
  [ 💬 Escribir por WhatsApp ] (primario amarillo)
```

---

### 10. CTA FINAL CON VIDEO DE FONDO

**Altura:** 85vh · position relative · overflow hidden

**Fondo:**
```
Video en loop · muted · autoplay · playsinline
Videos sugeridos (stock libre): tomas de tienda de lentes, monturas en vitrina, cliente probándose gafas, detalles macro de lentes, atención en óptica

Overlay doble:
  1. linear-gradient(135deg, rgba(139,26,74,0.85) 0%, rgba(26,10,20,0.75) 100%)
  2. noise texture sutil encima

Fallback si no hay video: imagen de fondo con el mismo overlay
```

**Contenido centrado:**
```
Badge pill:
  "Agenda hoy tu evaluación"
  background: rgba(245,197,24,0.2) · border: 1px solid rgba(245,197,24,0.5) · color white
  Font: DM Sans 600 12px uppercase tracking-widest
  padding: 8px 20px · border-radius 20px

Título H2:
  "Cuida tu visión con
  atención profesional
  y personalizada"
  Font: Playfair Display 64px · color white · line-height 1.1 · text-align center
  La palabra "profesional" en color #F5C518

Subtítulo:
  "Agenda tu evaluación visual en Óptica Franchesca y encuentra los lentes ideales para tu estilo y necesidad visual."
  Font: DM Sans 400 18px · color rgba(255,255,255,0.8) · max-width 560px · centrado · line-height 1.65

Botones (centrados):
  [ 💬 Agendar por WhatsApp ] (ghost borde blanco · hover fondo blanco texto oscuro)
  [ Enviar consulta ] (primario amarillo)
  gap: 16px

Estadísticas decorativas (3 items en fila):
  "24+" / "Años de experiencia"
  "∞" (o "Miles") / "Familias atendidas"
  "100%" / "Atención personalizada"
  Separador: línea vertical rgba(255,255,255,0.25)
  Número: Playfair Display 36px white
  Texto: DM Sans 12px rgba(255,255,255,0.65) uppercase
  margin-top: 64px
```

---

### 11. FOOTER

**Fondo:** `#1A0A14` (buganvilla muy oscuro / casi negro)

**Layout:** Grid 4 columnas (logo+misión · navegación · contacto · redes)

**Columna 1 — Marca:**
```
Logo (versión blanca+amarilla+buganvilla) · width 140px
Frase: "Más de 24 años cuidando la visión de las familias tacneñas."
Font: Cormorant Garamond Italic 16px · color rgba(255,255,255,0.65) · line-height 1.6 · max-width 220px
Barra amarilla decorativa: 40px · 2px height · color #F5C518 · margin: 16px 0
```

**Columna 2 — Navegación rápida:**
```
Título: "Navegación" · DM Sans 600 11px · uppercase tracking-wider · color #F5C518 · margin-bottom 16px
Links: DM Sans 400 14px · color rgba(255,255,255,0.65) · hover color white
Inicio · Nosotros · Servicios · Monturas · Diferenciales · Testimonios · Contacto
```

**Columna 3 — Contacto:**
```
Título: "Visítanos" · mismos estilos
[ 📍 ] Dirección completa Tacna
[ 🕐 ] Horario de atención
[ 📱 ] WhatsApp
[ ✉ ] Correo
Font: DM Sans 13px · color rgba(255,255,255,0.65) · ícono color #F5C518
```

**Columna 4 — Redes sociales:**
```
Título: "Síguenos"
Íconos sociales: Instagram · TikTok · Facebook
Círculos 40px · border 1px solid rgba(245,197,24,0.3) · ícono blanco 18px
hover: fondo #F5C518 · ícono #1A1A1A
```

**Footer bottom bar:**
```
Border-top: 1px solid rgba(255,255,255,0.1)
padding: 20px 0
"© 2025 Óptica Franchesca. Todos los derechos reservados. · Tacna, Perú"
Font: DM Sans 12px · color rgba(255,255,255,0.4)
```

---

## MICRO-INTERACCIONES Y ANIMACIONES

```
Scroll reveal: todas las secciones entran con fadeInUp (opacity 0→1 · translateY 30px→0 · duration 0.6s ease-out)
Stagger: grupos de cards con delay 0.1s entre cada una
Hover cards: translateY(-6px) · sombra intensificada · duration 0.3s ease
Hover botones: translateY(-2px) · sombra suave · duration 0.2s
Accordion confianza: width transition 0.5s cubic-bezier(0.4, 0, 0.2, 1)
Carrusel servicios: opacity + scale transition simultáneo · 0.4s ease-out
Before/After slider: drag smooth · handle con shadow
Video CTA: fade in suave al hacer scroll · video sin controles visibles
WhatsApp FAB móvil: pulse animation suave en el ícono cada 3s
```

---

## RESPONSIVIDAD

```
Desktop: > 1200px — layout completo como descrito
Tablet: 768px–1199px — grids a 2 columnas · hero a columna única · accordion a carrusel
Mobile: < 768px — single column · typography scale reducida · hero compacto · FAB WhatsApp fijo
```

**Breakpoints críticos:**
```
Hero mobile: imagen encima del texto · imagen 280px height · texto completo debajo
Header mobile: hamburger menu · botón WhatsApp siempre visible
Accordeon → carrusel swipeable
Grid diferenciales → 1 columna en mobile, 2 en tablet
Footer → columna única apilada
```

---

## NOTAS TÉCNICAS PARA FIGMA MAKE

1. **Usar componentes reutilizables:** botones, cards, badges, íconos como variables de componentes
2. **Tokens de diseño definidos** en variables de Figma: todos los colores, tipografías y espaciados como variables globales
3. **Auto-layout** en todos los componentes para facilitar el responsive
4. **Placeholders realistas:** usar imágenes de stock de ópticas, lentes, familias tacneñas — no mockups genéricos
5. **Íconos:** librería Tabler Icons o Phosphor Icons — estilo outline/lineal
6. **Fuentes:** cargar desde Google Fonts (Playfair Display, Cormorant Garamond, DM Sans)
7. **Scrolling suave** entre secciones con anchor links desde el menú
8. **WhatsApp link:** `https://wa.me/51XXXXXXXXX?text=Hola%2C+me+gustaría+agendar+una+evaluación+visual`

---

## OBJETIVO FINAL

La landing page debe lograr que quien llegue por primera vez a Óptica Franchesca sienta, en los primeros 5 segundos:

> *"Esta es una óptica con historia, que me va a tratar bien, tiene profesionales de verdad y sabe de lo que habla."*

Y que en los siguientes 30 segundos quiera escribir por WhatsApp o agendar una evaluación.

---

*Prompt elaborado para Figma Make — Óptica Franchesca · Tacna, Perú · 2025*
