
## lendsqr-fe-test


##  Requirements
| Tech |  Version   |
| :--: | :--------: |
| node | `v20.10.0` |
| npm  |  `10.2.3`  |

##  Technologies Used
- **React 19**
- **TypeScript**
- **Next.js 15.3.5**
- **SCSS for styling**


## Setup

1.- Clone the repo and install deps: `git clone repo_url && npm install`

2.- Install deps: `npm install`

4.- Run the app: `npm run dev`


## GitFlow
for purpose of this assessment a single branch was used through out development

| Branch |        Environment         |
| :----: | :------------------------: |
| `main`  |  |
for commit messages: for bug & updates fixes = patch: what-was-fixed
                     for new features = feat: what-was-implemented


## Folder Structure
This project follows a **Feature-Based Structure**, which combines the organization of code by features with the encapsulation of components and their related files. This structure promotes modularity, reusability, and maintainability, making it suitable for large-scale applications.

### app/

- **`app/`**: Contains feature-specific directories.
  - **`users/`**: Example feature directory.
    - **`page.tsx`**: The main page component for the feature, which imports and renders the feature's components.

### features/

- **`features/`**: Contains common, reusable components used across multiple features.
  - **`users/`**: Directory for dashboard components. .
    - **`index.tsx`**: Example of a common component directory.
    - **`data/`**: The component constants.
     - **`component/`**: The component's folder specific to the feature only, not re-used across the app.
        - **`general-info-label/`**: The component's logic.
  - **`components/`**: Directory for common components.
    - **`button/`**: Example of a common component directory.
      - **`index.tsx`**: The component's logic.
    - **`table/`**: Another common component.

**Code example: app/dashboard/page.tsx**
```js
import React from 'react';
import { Dashboard } from "@/src/features";

export default function Home(){
  return (
    <div>
      <Dasboard />
    </div>
  );
};

```
