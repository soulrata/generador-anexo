// env-loader.js - Cargador de variables de entorno para aplicaciones frontend
class EnvLoader {
    constructor() {
        this.env = {};
    }

    // Función para cargar el archivo .env
    async loadEnv() {
        try {
            const response = await fetch('.env');
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo .env');
            }
            
            const text = await response.text();
            this.parseEnvContent(text);
            return this.env;
        } catch (error) {
            console.warn('No se pudo cargar el archivo .env:', error.message);
            console.info('Usando configuración por defecto o manual');
            return {};
        }
    }

    // Función para parsear el contenido del archivo .env
    parseEnvContent(content) {
        const lines = content.split('\n');
        
        lines.forEach(line => {
            // Ignorar líneas vacías y comentarios
            line = line.trim();
            if (line === '' || line.startsWith('#')) {
                return;
            }
            
            // Parsear variables en formato KEY=VALUE
            const equalIndex = line.indexOf('=');
            if (equalIndex !== -1) {
                const key = line.substring(0, equalIndex).trim();
                const value = line.substring(equalIndex + 1).trim();
                
                // Remover comillas si existen
                this.env[key] = value.replace(/^["']|["']$/g, '');
            }
        });
    }

    // Función para obtener una variable específica
    get(key, defaultValue = null) {
        return this.env[key] || defaultValue;
    }
}

// Exportar para uso en otros archivos
window.EnvLoader = EnvLoader;
