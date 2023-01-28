# Установка
1. Устанавливаем NodeJS 16.
2. После установки или загрузки изменений со старой версии проекта (без React) делаем `npm install`.
3. Чтобы запустить проект, делаем `npm start`.

# Компоненты
Компонент - переиспользуемый и независимый кусок разметки с (почти всегда) определенной логикой. Страницы (`pages/`) состоят из компонентов (`components/`), хотя в свою очередь тоже ими являются. Например, Header - компонент, и он используется на всех страницах; Login - пример страницы, на которой присутствует компонент Header.  
Папочная структура компонента (и страницы):
```
ComponentName/
  index.tsx
  styles.module.scss
  ChildComponentName1/
    index.tsx
    styles.module.scss
  ChildComponentName2/
    ...
```
Внутри самого компонента структура следующая:
```
import s from './styles.module.scss';

interface Props { ... };

export function ComponentName(props: Props) {
  return (
    <div className={s.className1}>
      ...
    </div>
  );
}
```

# Создание новой страницы
1. Создаем страницу по шаблону выше.
2. В файл `src/types.ts` добавляем url новой страницы:
  ```
  export enum RouteLinks {
      ...
      PAGE_NAME = '/page-url',
  }
  ```
3. В приложение (`src/components/App/index.tsx`) ипортируем страницу (`import { PageComponent } from './pages/PageComponent';`) и в `router` добавляем новую страницу:
```
const router = createBrowserRouter([
  ...
  {
    path: RouteLinks.PAGE_NAME,
    element: <PageComponent />
  },
]);
```