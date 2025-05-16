# projectNFT
# Зависимости
node_modules/      # Папка с установленными npm-пакетами
.pnpm/             # Если используется pnpm
jspm_packages/     # Для JSPM
bower_components/  # Если используется Bower (устаревшее)

# Файлы окружения и секреты
.env               # Переменные окружения (пароли, ключи БД)
.env.local         # Локальные настройки
.env.*             # Все вариации .env (например, .env.production)
config.json        # Файлы с конфигами (если содержат секреты)

# Локальные файлы базы данных
*.db               # SQLite, локальные файлы БД
*.sqlite
data/              # Папка с данными БД (если хранится локально)
dump.sql           # Дампы БД (если не нужно коммитить)

# Логи и временные файлы
*.log              # Логи приложения/сервера
logs/              # Папка с логами
tmp/               # Временные файлы
.tmp/
*.pid

# Сборка и артефакты
dist/              # Скомпилированные файлы (если используете TypeScript/Babel)
build/             # Папка сборки
.coverage/         # Результаты тестового покрытия
.out/              # Для Next.js или других фреймворков

# IDE и редакторы
.idea/             # JetBrains IDE
.vscode/           # Настройки VS Code
.DS_Store          # macOS
*.swp              # Vim
*.swo

# Системные файлы
Thumbs.db          # Windows
ehthumbs.db

# npm
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Кэш
.cache/            # Кэш инструментов (например, Babel, ESLint)
