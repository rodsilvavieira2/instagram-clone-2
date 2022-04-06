import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, LazyFallBack, Footer } from "./components";
import { HeaderContainer, ModalsContainer } from "./containers";
import { MainLayout } from "./layouts";
import {
  HomePage,
  SavedPage,
  ExplorePage,
  SuggestionsPage,
  MainProfilePage,
  PublicationTabSection,
  SavedTabSection,
  MarkedTabSection,
} from "./pages";

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <HeaderContainer />

        <Suspense fallback={<LazyFallBack />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />

              <Route
                path="/:userName/saved/:collectionName"
                element={<SavedPage />}
              />

              <Route path="explore" element={<ExplorePage />} />

              <Route path="/suggestions" element={<SuggestionsPage />} />
            </Route>

            <Route path="/:userName/" element={<MainProfilePage />}>
              <Route index element={<PublicationTabSection />} />

              <Route path="saved" element={<SavedTabSection />} />

              <Route path="marked" element={<MarkedTabSection />} />
            </Route>
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>

      <ModalsContainer />
    </Container>
  );
};
