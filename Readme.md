# Playground & Demo // State of CSS Workshop // 2024
Workshop im Rahmen des Moduls Web Technologien: View Transitions, Scroll-Driven Animations und mehr. Hier gibt es die [Slides zum Workshop](https://cnoss.github.io/slides/presentations/misc/css-2024/).

## Disclaimer
Die Inhalte für diese Demo Anwendungsbeispiel sind dem [Cranach Digital Archive](https://lucascranach.org) entliehen und nur für diesen Workshop bestimmt. Sie dürfen nicht verändert, weitergegeben oder veröffentlicht werden. Danke! 🙌🏽

## Struktur des Repos

Die Challenges sind im Wurzelverzeichnis als einzelne Markdown Dateien abgelegt. Folgende Challenge machen wir gemeinsam:
- [Add Progress Bar](progress-bar.md)

Des Weiteren stellen folgende Challenges zur Verfügung:
- [Implement Broken Grid Layouts](broken-grid.md)
- [Add View Transitions](view-transition.md)
- [Animate Masterpiece Roll](animate-masterpiece-roll.md)
- [Animate Cranach Facts](animate-facts.md)
- [Animate Wall of Masterpieces](animate-wall.md)
- [Design Popover Transition](popover-transition.md)


## Wo starte ich was?

Im Verzeichnis `masterpieces-demo` befindet sich die *fertige* Version des digitalen Cranach Masterpieces Coffeetable Book. Im Verzeichnis `masterpieces-playground` ist die Version in der gearbeitet werden soll.

## Wie starte ich eine Version?

Es reicht in das jeweile Verzeichnis zu gehen und einen Web-Server zu starten, z.B. den Embedded Server von Visual Studio Code. Alternativ kann aber auch im jeweiligen Verzeichnis der Version ein `npm install` ausgeführt werden und ein Dev Server via `npm run dev` gestartet werden. In diesem Fall wird auch [Stylelint](https://stylelint.io) installiert und gestartet.

Falls der Linter nervt kann der Server auch via `npm run quiet` gestartet werden. Dann eben ohne stylelint.

## Wo muss ich Änderungen machen?

Das ist in der jeweiligen Challenge beschrieben. Grundsätzlich sind aber nur Änderungen in den CSS Dateien zu machen. Diese finden sich im Verzeichnis `assets/styles/`.

## Weitere Infos & Anregungen

### Baseline
- [https://mdn/baseline-unified-view-stable-web-features/](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/)
- [https://web.dev/baseline](https://web.dev/baseline?hl=de)

### Custom Properties
- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)

### CSS Nesting
- [CSS Nesting Module, W3C, 25/06/2024](https://drafts.csswg.org/css-nesting/)
- [CSS Nesting, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [& nesting selector, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector)

### CSS Grid
- [CSS Grid Layouts, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [A Complete Guide to CSS Grid, CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Motion in UI
- [UI Animation, Interaction Design Foundation](https://www.interaction-design.org/literature/topics/ui-animation#:~:text=Animations%20draw%20attention%20and%20provide,cognitive%20load%20and%20prevent%20disorientation.)
- [The Role of Animation and Motion in UX, NNg](https://www.nngroup.com/articles/animation-purpose-ux/)

### CSS Transitions & Keyframe Animations
- [Using CSS transitions, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [An Interactive Guide to CSS Transitions](https://www.joshwcomeau.com/animation/css-transitions/)
- [Using CSS animations, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)

### Scroll Driven Animations
- [Scroll Driven Animations, Bramus Demo](https://scroll-driven-animations.style/)
- [CSS scroll-driven animations, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

### View Transitions
- [View Transitions API, MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Explainer Document, WICG](https://github.com/WICG/view-transitions/blob/main/explainer.md)

### Popover API
- [Popover API, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Introducing the popover API, Chrome for Developers](https://developer.chrome.com/blog/introducing-popover-api)

### Mehr zum Themenblock
- [The Lean Web](https://leanweb.dev)
- [What's new in the Web, Google I/O Talk from Rachel Andrew](https://io.google/2024/explore/6d6b2a35-ae3a-4f73-b40d-9dc4a8cf0df4/)
- [Multi-page application View Transitions are here, Google I/O Talk from Bramus Van Damme](https://io.google/2024/explore/8ae18b72-028e-4722-9a05-4a480048e629/)
- [The state of CSS and Web UI, Google I/O Talk from Una Kravets](https://io.google/2024/explore/83764202-1ca2-4491-a731-c4d3701624d4/)

## Playgrounds

Folgende Playgrounds zum Workshop sind auf Codepen verfügbar:
- [CSS Broken Grid Demo](https://codepen.io/cnoss/pen/poXJXeV)
- [CSS Popover Demo](https://codepen.io/cnoss/pen/PorqvmY)
- [CSS Scroll Driven View Timeline Demo](https://codepen.io/cnoss/pen/QWXbVRw)
- [CSS Scroll Driven Animation Demo](https://codepen.io/cnoss/pen/VwJLxNB)
- [CSS Transition Demo](https://codepen.io/cnoss/pen/YzoXeXR)

## Fragen oder Anregungen bitte an
[Christian Noss](https://christiannoss.de)

