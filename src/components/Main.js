import React from "react";
import EditSection from "./EditSection";
import PreviewSection from "./PreviewSection";

class Main extends React.Component {
  render () {
    return (
      <main>
        <EditSection />
        <PreviewSection />
      </main>
    )
  }
}

export default Main