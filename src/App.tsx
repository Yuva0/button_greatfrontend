import "./App.css";
import Button from "./components/Button/Button";

import { Star } from "tabler-icons-react";

function App() {
  return (
    <div className="app">
      <div className="btn-group-container">
        <div className="btn-group">
          <Button variant="primary" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="primary" size="large">
            Button CTA
          </Button>
          <Button variant="primary" size="extra-large" trailingIcon={<Star />}>
            Button CTA
          </Button>
          <Button variant="primary" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="primary" size="2-extra-large">
            <Star />
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="secondary" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="secondary" size="large">
            Button CTA
          </Button>
          <Button
            variant="secondary"
            size="extra-large"
            trailingIcon={<Star />}
          >
            Button CTA
          </Button>
          <Button variant="secondary" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="secondary" size="2-extra-large">
            <Star />
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="tertiary" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="tertiary" size="large">
            Button CTA
          </Button>
          <Button variant="tertiary" size="extra-large" trailingIcon={<Star />}>
            Button CTA
          </Button>
          <Button variant="tertiary" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="tertiary" size="2-extra-large">
            <Star />
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="link-color" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="link-color" size="large">
            Button CTA
          </Button>
          <Button
            variant="link-color"
            size="extra-large"
            trailingIcon={<Star />}
          >
            Button CTA
          </Button>
          <Button variant="link-color" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="link-color" size="2-extra-large">
            <Star />
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="link-gray" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="link-gray" size="large">
            Button CTA
          </Button>
          <Button
            variant="link-gray"
            size="extra-large"
            trailingIcon={<Star />}
          >
            Button CTA
          </Button>
          <Button variant="link-gray" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="link-gray" size="2-extra-large">
            <Star />
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="destructive" size="medium">
            Button CTA
          </Button>
          <Button leadingIcon={<Star />} variant="destructive" size="large">
            Button CTA
          </Button>
          <Button
            variant="destructive"
            size="extra-large"
            trailingIcon={<Star />}
          >
            Button CTA
          </Button>
          <Button variant="destructive" size="2-extra-large">
            Button CTA
          </Button>
          <Button isIcon variant="destructive" size="2-extra-large">
            <Star />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
