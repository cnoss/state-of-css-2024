# Implement Broken Grid Layouts Challenge

Bei den Masterpieces gibt verschiedene Layouttypen welche sich an den verschiedenen Seitenverhältnissen der Bilder orientieren:  Square, Landscape und Portrait.

Landscape und Portrait haben jeweils noch zwei Varianten. Alle Varianten werden wie folgt im CSS abgebildet:

```css
/* Ratio 1 zu 2 */
  &[data-ratio="ratio-1-to-2"] {
    .visual-content {
      …
    }
    .text-content {
      …   
    }
  }

  /* Ratio 3 zu 4 */
  &[data-ratio="ratio-3-to-4"] {
    .visual-content {
      …
    }
    .text-content {
      …   
    }
  }

  /* Ratio 1 zu 1 */
  &[data-ratio="ratio-1-to-1"] {
    .visual-content {
      …
    }
    .text-content {
      …   
    }
  }

  /* Ratio 4 zu 3 */
  &[data-ratio="ratio-4-to-3"] {
    .visual-content {
      …
    }
    .text-content {
      …   
    }
  }

  /* Ratio 2 zu 1 */
  &[data-ratio="ratio-2-to-1"] {
    .visual-content {
      …
    }
    .text-content {
      …   
    }
  }
```

## Was ist die Challenge?
Es sollen für die verschiedenen Layouttypen Broken Grid Layouts implementiert werden. Diese könnten so aussehen, wie die folgenden Beispiele.

- [square](./images/challenges/broken-grid-square.jpg)
- [landscape-2-to-1](./images/challenges/broken-grid-landscape-2-to-1.jpg)
- [landscape-4-to-3](./images/challenges/broken-grid-landscape-4-to-3.jpg)
- [portrait-3-to-4](./images/challenges/broken-grid-portrait-3-to-4.jpg)
- [portrait-1-to-2](./images/challenges/broken-grid-portrait-1-to-2.jpg)

## Wo muss ich Änderungen machen?
Änderungen sind nur an der CSS Datei der Single Masterpieces erforderlich:
file://./masterpieces-playground/assets/styles/layouts/single-masterpiece.css

## Beispielinhalte
Mit diesen Masterpieces kann die Implementierung überprüft werden.

### Square
http://0.0.0.0:4000/de/DE_KSW_G818/

### Landscape
- 2-to-1: http://0.0.0.0:4000/de/DE_WSCH_NONE-WSCH001F/
- 4-to-3: http://0.0.0.0:4000/de/CZ_NGP_O10732/

### Portrait
- 1-to-2 -> http://0.0.0.0:4000/de/DE_AGGD_7a/
- 3-to-4 -> http://0.0.0.0:4000/de/DE_BStGS-GNMN_Gm214/