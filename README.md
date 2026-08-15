# Estética Tres Cruces — DEMO privada

Landing estática de una sola página enfocada en conversión a WhatsApp.

## Desarrollo local

No requiere build. Abrí `index.html` directamente o serví la carpeta con cualquier servidor estático.

Ejemplo:

```bash
python -m http.server 8080
```

## Deploy rápido en Vercel

Subí esta carpeta a un repositorio y desplegala como sitio estático. `vercel.json`, `robots.txt` y las etiquetas meta ya incluyen `noindex/nofollow`.

Para que la demo sea realmente privada además de no indexable, activá **Vercel Deployment Protection** o protegé el deployment con contraseña desde la plataforma.

## Datos públicos incluidos

- Estética Tres Cruces
- Acevedo Díaz 1868, Montevideo
- WhatsApp / teléfono: +598 92 451 802
- Valoración mostrada: 5,0 / más de 330 opiniones (333 en la consulta usada para esta demo)
- Horario mostrado: lunes a viernes 09:00–22:00; sábado 09:00–12:00
- Facebook público del negocio
- Email público encontrado en la información de contacto de Facebook

## Límites de contenido

- No se incluyen precios.
- No se inventan testimonios.
- No se usan fotos de clientes.
- No se prometen resultados estéticos garantizados.
- La sección de reseñas usa placeholders explícitos hasta disponer de reseñas auténticas autorizadas.
- Solo se menciona de forma específica radiofrecuencia facial, encontrada en publicaciones públicas del negocio; el resto se presenta como objetivos de consulta.

## Extender tratamientos

Editá el array `treatments` en `script.js`. Cada entrada admite `number`, `title`, `copy`, `cta`, `href` y `variant`.
