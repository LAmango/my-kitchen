import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const ingredients = [
  { amount: '2', item: 'gluten-free pie crusts, chilled' },
  { amount: '1½ lb', item: 'boneless, skinless chicken thighs, cut into ¾-inch pieces' },
  { amount: '1 tsp', item: 'kosher salt, divided' },
  { amount: '½ tsp', item: 'black pepper, divided' },
  { amount: '3 tbsp', item: 'unsalted butter' },
  { amount: '1 small', item: 'yellow onion, diced' },
  { amount: '2', item: 'carrots, peeled and diced' },
  { amount: '2 ribs', item: 'celery, diced' },
  { amount: '3 tbsp', item: 'gluten-free all-purpose flour blend' },
  { amount: '2 cups', item: 'chicken broth' },
  { amount: '¾ cup', item: 'whole milk' },
  { amount: '1 cup', item: 'frozen peas' },
  { amount: '1 tsp', item: 'fresh thyme leaves (or ½ tsp dried)' },
  { amount: '1', item: 'large egg, beaten with 1 tsp water' },
]

const steps = [
  {
    title: 'Heat the oven',
    time: '5 min',
    body: <>Heat oven to <b>400°F (200°C)</b>. Set one chilled <b>9-inch gluten-free pie crust</b> into a pie dish. Keep the second crust chilled for the top.</>,
  },
  {
    title: 'Brown the chicken',
    time: '8 min',
    body: <>Pat <b>1½ lb chicken</b> dry and season with <b>½ tsp salt</b> and <b>¼ tsp pepper</b>. Melt <b>1 tbsp butter</b> in a large skillet over medium-high heat. Brown chicken in a single layer, about 3–4 minutes per side; transfer to a plate. It will finish cooking in the oven.</>,
  },
  {
    title: 'Soften the vegetables',
    time: '7 min',
    body: <>Add the remaining <b>2 tbsp butter</b> to the skillet. Cook <b>1 diced onion, 2 diced carrots, and 2 diced celery ribs</b> with <b>½ tsp salt</b> and <b>¼ tsp pepper</b> until softened, about 6–7 minutes.</>,
  },
  {
    title: 'Make the creamy filling',
    time: '5 min',
    body: <>Stir in <b>3 tbsp gluten-free flour</b> and cook for 1 minute. Slowly pour in <b>2 cups chicken broth</b> and <b>¾ cup milk</b>, stirring until smooth. Simmer 2–3 minutes, until thickened. Fold in the browned chicken, <b>1 cup peas</b>, and <b>1 tsp thyme</b>.</>,
  },
  {
    title: 'Fill and seal the pie',
    time: '5 min',
    body: <>Pour the filling into the bottom crust. Lay the second crust over the top, trim the edge, then crimp to seal. Cut 4 small vents in the center. Brush the top with <b>1 beaten egg mixed with 1 tsp water</b>.</>,
  },
  {
    title: 'Bake until golden',
    time: '40 min',
    body: <>Bake at <b>400°F (200°C) for 35–40 minutes</b>, until the crust is deeply golden and the filling bubbles through the vents. If the edges brown too quickly, cover them loosely with foil.</>,
  },
  {
    title: 'Rest, then serve',
    time: '15 min',
    body: <>Let the pie stand for <b>15 minutes</b> before slicing so the filling can set. Check labels on the pie crust, flour blend, and broth to ensure they are certified gluten-free.</>,
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="My Kitchen home"><span className="mark">M</span> MY KITCHEN</a>
        <span className="top-note">SIMPLE FOOD, MADE WELL</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> COMFORT FOOD · GLUTEN-FREE</div>
          <h1>Chicken<br /><em>pot pie.</em></h1>
          <p className="intro">Golden, flaky crust. A cozy, creamy filling. The kind of dinner that makes everyone linger at the table.</p>
          <div className="quick-facts">
            <div><span className="fact-label">PREP</span><strong>25 min</strong></div>
            <div><span className="fact-label">COOK</span><strong>55 min</strong></div>
            <div><span className="fact-label">MAKES</span><strong>6 servings</strong></div>
          </div>
        </div>
        <div className="pie-art" role="img" aria-label="Illustration of a golden chicken pot pie">
          <div className="plate"><div className="pie"><div className="pie-top"><span /><span /><span /><span /><span /><span /><span /><span /><i>✳</i></div><div className="pie-crimp" /></div></div>
          <div className="art-caption">THE SUNDAY CLASSIC <span>№ 01</span></div>
        </div>
      </section>

      <div className="section-rule"><span>THE RECIPE</span><span className="rule" /><span>01 — 02</span></div>

      <section className="recipe-layout">
        <aside className="ingredients-panel">
          <div className="section-heading"><span className="section-number">01</span><h2>Gather<br />your ingredients.</h2></div>
          <p className="aside-note">A little prep makes the whole thing easy. Cut everything before the pan gets hot.</p>
          <ul className="ingredient-list">
            {ingredients.map((ingredient) => <li key={ingredient.item}><span className="amount">{ingredient.amount}</span><span>{ingredient.item}</span></li>)}
          </ul>
          <div className="note-card"><span className="note-star">✳</span><p><b>Gluten-free note</b><br />Check every label, especially the crust, flour, and broth. Products and manufacturing practices vary.</p></div>
        </aside>

        <section className="steps-panel">
          <div className="section-heading"><span className="section-number">02</span><h2>Make it<br />step by step.</h2></div>
          <p className="aside-note">Every amount you need is right here, so there’s no scrolling back to the ingredient list.</p>
          <div className="steps-list">
            {steps.map((step, index) => <article className="step" key={step.title}>
              <div className="step-count">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-content"><div className="step-meta"><h3>{step.title}</h3><span>{step.time}</span></div><p>{step.body}</p></div>
            </article>)}
          </div>
        </section>
      </section>

      <footer><a className="wordmark" href="#top"><span className="mark">M</span> MY KITCHEN</a><span>Made for the people around your table.</span><a className="back-top" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
