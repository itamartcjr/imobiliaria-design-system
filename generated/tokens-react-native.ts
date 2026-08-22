export const tokens = {
  "colors": {
    "background": {
      "canvas": {
        "dark": "#272727",
        "light": "#F4F4F4",
        "usage": "Canvas principal. Dark segue o admin; light usa base neutra."
      },
      "surface": {
        "dark": "#2C2C2C",
        "light": "#FFFFFF",
        "usage": "Superfície principal de cards, formulários e coleções."
      },
      "surfaceElevated": {
        "dark": "#303030",
        "light": "#FFFFFF",
        "usage": "Dropdowns, modais e painéis elevados."
      },
      "surfaceInteractive": {
        "dark": "#383838",
        "light": "#E8E8E8",
        "usage": "Hover, seleção neutra e áreas interativas."
      }
    },
    "text": {
      "primary": {
        "dark": "#FFFFFF",
        "light": "#161616",
        "usage": "Texto principal."
      },
      "secondary": {
        "dark": "rgba(255, 255, 255, 0.62)",
        "light": "#525252",
        "usage": "Texto de apoio."
      },
      "tertiary": {
        "dark": "rgba(255, 255, 255, 0.38)",
        "light": "#6F6F6F",
        "usage": "Metadados e texto auxiliar."
      },
      "inverse": {
        "dark": "#FFFFFF",
        "light": "#FFFFFF",
        "usage": "Texto sobre ação primária e superfícies fortes."
      }
    },
    "border": {
      "subtle": {
        "dark": "rgba(255, 255, 255, 0.08)",
        "light": "#E0E0E0",
        "usage": "Separadores discretos."
      },
      "default": {
        "dark": "rgba(255, 255, 255, 0.12)",
        "light": "#C6C6C6",
        "usage": "Bordas padrão."
      },
      "strong": {
        "dark": "rgba(255, 255, 255, 0.22)",
        "light": "#8D8D8D",
        "usage": "Estados ativos e divisores de maior contraste."
      }
    },
    "accent": {
      "primary": {
        "dark": "#DB0423",
        "light": "#DB0423",
        "usage": "Ação primária e identidade do admin."
      },
      "hover": {
        "dark": "#FF3854",
        "light": "#C4031F",
        "usage": "Hover da ação primária."
      },
      "active": {
        "dark": "#B9021C",
        "light": "#A90019",
        "usage": "Pressed/active da ação primária."
      },
      "subtle": {
        "dark": "rgba(219, 4, 35, 0.18)",
        "light": "rgba(219, 4, 35, 0.10)",
        "usage": "Seleção e destaque suave."
      }
    },
    "status": {
      "success": {
        "dark": "#43A85B",
        "light": "#198038",
        "usage": "Sucesso e confirmação."
      },
      "warning": {
        "dark": "#D69B2D",
        "light": "#B28600",
        "usage": "Atenção e alerta."
      },
      "danger": {
        "dark": "#FF4D61",
        "light": "#DA1E28",
        "usage": "Erro e ação destrutiva; não confundir com accent de marca."
      },
      "info": {
        "dark": "#6F96FF",
        "light": "#0F62FE",
        "usage": "Informação e ajuda."
      }
    },
    "overlay": {
      "default": {
        "dark": "rgba(0, 0, 0, 0.64)",
        "light": "rgba(22, 22, 22, 0.42)",
        "usage": "Modais e side panels."
      },
      "strong": {
        "dark": "rgba(0, 0, 0, 0.82)",
        "light": "rgba(22, 22, 22, 0.58)",
        "usage": "Overlays críticos."
      }
    },
    "focus": {
      "ring": {
        "dark": "#78A9FF",
        "light": "#0F62FE",
        "usage": "Foco acessível com referência funcional Carbon; não é cor de marca."
      }
    }
  },
  "spacing": {
    "0": 0,
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 20,
    "6": 24,
    "7": 32,
    "8": 40,
    "9": 48,
    "10": 64
  },
  "radius": {
    "none": 0,
    "sm": 2,
    "md": 4,
    "lg": 6,
    "xl": 8,
    "pill": 999
  },
  "breakpoints": {
    "mobile": 0,
    "tablet": 768,
    "desktop": 1200,
    "largeDesktop": 1440
  },
  "sizes": {
    "container": {
      "narrow": 720,
      "default": 1120,
      "wide": 1440,
      "display": 1760
    },
    "touchTarget": 44,
    "icon": {
      "sm": 16,
      "md": 20,
      "lg": 24,
      "xl": 32
    }
  },
  "shadows": {
    "sm": {
      "dark": "0 1px 2px rgba(0, 0, 0, 0.24)",
      "light": "0 1px 2px rgba(0, 0, 0, 0.08)"
    },
    "md": {
      "dark": "0 4px 12px rgba(0, 0, 0, 0.30)",
      "light": "0 4px 12px rgba(0, 0, 0, 0.12)"
    }
  },
  "motion": {
    "duration": {
      "instant": 0,
      "fast": 70,
      "normal": 160,
      "slow": 240,
      "expressive": 320
    },
    "easing": {
      "productiveStandard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      "productiveEnter": "cubic-bezier(0, 0, 0.38, 0.9)",
      "productiveExit": "cubic-bezier(0.2, 0, 1, 0.9)",
      "expressiveStandard": "cubic-bezier(0.4, 0.14, 0.3, 1)",
      "expressiveEnter": "cubic-bezier(0, 0, 0.3, 1)",
      "expressiveExit": "cubic-bezier(0.4, 0.14, 1, 1)"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Manrope, Inter, system-ui, sans-serif",
      "mono": "ui-monospace, SFMono-Regular, Consolas, monospace"
    },
    "weights": {
      "regular": 400,
      "medium": 500,
      "semiBold": 600,
      "bold": 700
    },
    "scale": {
      "display": {
        "size": 30,
        "lineHeight": 36,
        "weight": 700,
        "letterSpacing": -0.4,
        "usage": "Display compacto de produto e dashboard."
      },
      "heading-1": {
        "size": 22,
        "lineHeight": 29,
        "weight": 700,
        "letterSpacing": -0.2,
        "usage": "Título principal no admin."
      },
      "heading-2": {
        "size": 18,
        "lineHeight": 25,
        "weight": 700,
        "letterSpacing": 0,
        "usage": "Seções administrativas."
      },
      "heading-3": {
        "size": 16,
        "lineHeight": 22,
        "weight": 600,
        "letterSpacing": 0,
        "usage": "Cards, painéis e subseções."
      },
      "heading-4": {
        "size": 14,
        "lineHeight": 20,
        "weight": 600,
        "letterSpacing": 0,
        "usage": "Títulos compactos."
      },
      "body-lg": {
        "size": 16,
        "lineHeight": 22,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Texto de maior destaque."
      },
      "body-md": {
        "size": 14,
        "lineHeight": 20,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Texto padrão do admin."
      },
      "body-sm": {
        "size": 12,
        "lineHeight": 17,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Descrição e apoio."
      },
      "label": {
        "size": 12,
        "lineHeight": 17,
        "weight": 600,
        "letterSpacing": 0,
        "usage": "Labels, botões e campos."
      },
      "caption": {
        "size": 11,
        "lineHeight": 15,
        "weight": 400,
        "letterSpacing": 0.1,
        "usage": "Metadados."
      },
      "overline": {
        "size": 11,
        "lineHeight": 15,
        "weight": 700,
        "letterSpacing": 0.8,
        "usage": "Cabeçalhos auxiliares."
      },
      "data": {
        "size": 14,
        "lineHeight": 20,
        "weight": 600,
        "letterSpacing": 0,
        "usage": "Tabelas, métricas e valores."
      },
      "site-display": {
        "size": 48,
        "lineHeight": 56,
        "weight": 700,
        "letterSpacing": -0.8,
        "usage": "Somente site público: hero e páginas editoriais."
      },
      "site-heading-1": {
        "size": 36,
        "lineHeight": 44,
        "weight": 700,
        "letterSpacing": -0.5,
        "usage": "Somente site público: título de página."
      }
    }
  }
} as const;
