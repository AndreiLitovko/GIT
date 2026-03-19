# GIT — DevFolio Project

Full-stack application: **Django REST API** (backend) + **React + Vite** (frontend).

---

## 📥 Как скачать и обновить проект в VS Code / How to clone & update in VS Code

### Первый раз (клонирование) / First time (clone)

```bash
git clone https://github.com/AndreiLitovko/GIT.git
cd GIT
```

Или в VS Code:
1. Откройте **Command Palette** (`Ctrl+Shift+P`)
2. Введите **Git: Clone**
3. Вставьте URL: `https://github.com/AndreiLitovko/GIT.git`
4. Выберите папку назначения

### Обновить существующую копию / Update an existing copy

**Способ 1 — Терминал VS Code** (`Ctrl+\``):
```bash
cd C:\Users\<ваш_пользователь>\GIT   # путь к папке проекта
git pull origin master
```

**Способ 2 — Интерфейс VS Code**:
1. Откройте вкладку **Source Control** (`Ctrl+Shift+G`)
2. Нажмите на кнопку **⋯** (три точки) → **Pull**

После обновления не забудьте переустановить зависимости, если они изменились (см. разделы ниже).

---

## 🐍 Backend — Django API (`yt_devfolio_api/`)

### Требования / Requirements
- Python 3.10+

### Установка / Setup

```bash
cd yt_devfolio_api

# Создать и активировать виртуальное окружение
python -m venv venv

# Windows:
venv\Scripts\activate
# macOS / Linux:
source venv/bin/activate

# Установить зависимости
pip install -r requirements.txt

# Применить миграции базы данных
python manage.py migrate
```

### Файл переменных окружения / Environment variables

Создайте файл `.env` в папке `yt_devfolio_api/`:

```env
SECRET_KEY=django-insecure-dev-key-change-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

### Запуск сервера / Run the server

```bash
python manage.py runserver
```

API доступен на `http://localhost:8000`

---

## ⚛️ Frontend — React + Vite (`django_react_full_project_2025/`)

### Требования / Requirements
- Node.js 18+

### Установка / Setup

```bash
cd django_react_full_project_2025
npm install
```

### Файл переменных окружения / Environment variables

Создайте файл `.env` в папке `django_react_full_project_2025/`:

```env
VITE_BASE_URL=http://localhost:8000
```

### Запуск dev-сервера / Run the dev server

```bash
npm run dev
```

Приложение доступно на `http://localhost:5173`

---

## 🔄 После каждого `git pull`

| Что изменилось | Что нужно сделать |
|---|---|
| `requirements.txt` | `pip install -r requirements.txt` |
| Новые Django-миграции | `python manage.py migrate` |
| `package.json` | `npm install` |
| Только `.py` / `.jsx` файлы | Ничего — перезапустите серверы |
