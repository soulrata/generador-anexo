# Generador de Anexos

Sistema web para generar anexos automáticamente desde hojas de cálculo de Google Sheets.

## 🚀 Configuración inicial

### 1. Configurar la API Key de Google Sheets

1. **Copia el archivo de configuración:**
   ```bash
   copy .env.example .env
   ```

2. **Obtén tu API Key de Google Sheets:**
   - Ve a [Google Cloud Console](https://console.developers.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Habilita la API de Google Sheets
   - Ve a "Credenciales" > "Crear credenciales" > "Clave de API"
   - Copia la clave generada

3. **Configura tu API Key:**
   - Abre el archivo `.env`
   - Reemplaza `TU_API_KEY_AQUI` con tu API key real:
   ```env
   GOOGLE_SHEETS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### 2. Configurar permisos de la hoja de cálculo

1. Abre tu hoja de cálculo de Google Sheets
2. Haz clic en "Compartir"
3. Cambia los permisos a "Cualquiera con el enlace puede ver"
4. Copia el enlace de la hoja

## 📋 Uso

1. **Abrir la aplicación:**
   - Abre el archivo `index.html` en tu navegador web

2. **Cargar datos:**
   - Pega el enlace completo de Google Sheets en el campo de entrada
   - Haz clic en "Cargar Datos"
   - La aplicación extraerá automáticamente el ID de la hoja

3. **Ver los anexos:**
   - Navega entre las pestañas: Anexo I, II y III
   - Usa el botón "Copiar" para copiar el contenido al portapapeles

## 🔧 Estructura de archivos

```
├── index.html     # Aplicación principal
├── env-loader.js           # Cargador de variables de entorno
├── .env                    # Variables de entorno (no subir a git)
├── .env.example           # Plantilla de configuración
├── .gitignore             # Archivos a ignorar en git
└── README.md              # Este archivo
```

## 🔒 Seguridad

- El archivo `.env` contiene información sensible y **NO** debe subirse al repositorio
- Usa siempre el archivo `.env.example` como plantilla
- En producción, considera usar variables de entorno del servidor

## 🆘 Solución de problemas

### Error: "No se pudo cargar el archivo .env"
- Asegúrate de que el archivo `.env` esté en la misma carpeta que `GeneradorAnexo.html`
- Verifica que el archivo tenga la extensión correcta (`.env`, no `.env.txt`)

### Error: "API key no válida"
- Verifica que tu API key esté correctamente configurada en el archivo `.env`
- Asegúrate de haber habilitado la API de Google Sheets en Google Cloud Console
- Comprueba que la hoja de cálculo sea pública o compartida correctamente

### Los datos no se cargan
- Verifica que el enlace de Google Sheets sea correcto
- Asegúrate de que las hojas tengan los nombres correctos: 'A1', 'A2', 'A3'
- Comprueba la consola del navegador (F12) para ver errores específicos
