export const tokens = {
  "colors": {
    "background": {
      "canvas": {
        "dark": "#090909",
        "light": "#F5F0E8",
        "usage": "Fundo principal da aplicação e da documentação."
      },
      "surface": {
        "dark": "#111214",
        "light": "#FFFDF8",
        "usage": "Cartões e superfícies base."
      },
      "surfaceElevated": {
        "dark": "#18191C",
        "light": "#FFFFFF",
        "usage": "Superfícies elevadas, dropdowns e painéis."
      },
      "surfaceInteractive": {
        "dark": "#202125",
        "light": "#F0EBE1",
        "usage": "Hover, pressed e áreas clicáveis."
      }
    },
    "text": {
      "primary": {
        "dark": "#F5F0E8",
        "light": "#171717",
        "usage": "Texto principal."
      },
      "secondary": {
        "dark": "#C7C1B7",
        "light": "#55514A",
        "usage": "Texto de apoio."
      },
      "tertiary": {
        "dark": "#8A857A",
        "light": "#7D786F",
        "usage": "Texto auxiliar e metadados."
      },
      "inverse": {
        "dark": "#090909",
        "light": "#FFFFFF",
        "usage": "Texto sobre superfícies invertidas."
      }
    },
    "border": {
      "subtle": {
        "dark": "rgba(245, 240, 232, 0.08)",
        "light": "rgba(23, 23, 23, 0.08)",
        "usage": "Separadores discretos."
      },
      "default": {
        "dark": "rgba(245, 240, 232, 0.14)",
        "light": "rgba(23, 23, 23, 0.14)",
        "usage": "Bordas padrão."
      },
      "strong": {
        "dark": "rgba(245, 240, 232, 0.24)",
        "light": "rgba(23, 23, 23, 0.22)",
        "usage": "Contornos mais fortes e estados ativos."
      }
    },
    "accent": {
      "primary": {
        "dark": "#D4FB00",
        "light": "#D4FB00",
        "usage": "Ação primária, seleção e foco importante."
      },
      "hover": {
        "dark": "#E5FF4F",
        "light": "#E5FF4F",
        "usage": "Estado hover do accent."
      },
      "active": {
        "dark": "#B6D400",
        "light": "#B6D400",
        "usage": "Pressed e estado ativo do accent."
      },
      "subtle": {
        "dark": "rgba(212, 251, 0, 0.16)",
        "light": "rgba(212, 251, 0, 0.12)",
        "usage": "Badges e fundos suaves."
      }
    },
    "status": {
      "success": {
        "dark": "#43A85B",
        "light": "#2E8B57",
        "usage": "Sucesso e confirmação."
      },
      "warning": {
        "dark": "#D69B2D",
        "light": "#B87B14",
        "usage": "Atenção e alerta."
      },
      "danger": {
        "dark": "#FF5B6E",
        "light": "#D53F54",
        "usage": "Erro e destruição."
      },
      "info": {
        "dark": "#6F96FF",
        "light": "#3768E8",
        "usage": "Informação e ajuda."
      }
    },
    "overlay": {
      "default": {
        "dark": "rgba(0, 0, 0, 0.72)",
        "light": "rgba(9, 9, 9, 0.42)",
        "usage": "Modais, drawers e hero overlays."
      },
      "strong": {
        "dark": "rgba(0, 0, 0, 0.92)",
        "light": "rgba(9, 9, 9, 0.56)",
        "usage": "Overlays críticos e mobile sheets."
      }
    },
    "focus": {
      "ring": {
        "dark": "#D4FB00",
        "light": "#B6D400",
        "usage": "Estados de foco visíveis."
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
    "sm": 4,
    "md": 8,
    "lg": 16,
    "xl": 24,
    "pill": 9999
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
      "dark": "0 10px 24px rgba(0, 0, 0, 0.18)",
      "light": "0 10px 24px rgba(0, 0, 0, 0.06)"
    },
    "md": {
      "dark": "0 18px 44px rgba(0, 0, 0, 0.26)",
      "light": "0 18px 44px rgba(0, 0, 0, 0.10)"
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
      "extraLight": 200,
      "light": 300,
      "regular": 400,
      "medium": 500,
      "semiBold": 600,
      "bold": 700,
      "extraBold": 800
    },
    "scale": {
      "display": {
        "size": 56,
        "lineHeight": 64,
        "weight": 800,
        "letterSpacing": -1,
        "usage": "Hero editorial, cover e chamadas principais."
      },
      "heading-1": {
        "size": 40,
        "lineHeight": 48,
        "weight": 800,
        "letterSpacing": -0.8,
        "usage": "Título principal de página."
      },
      "heading-2": {
        "size": 32,
        "lineHeight": 40,
        "weight": 700,
        "letterSpacing": -0.4,
        "usage": "Seções importantes."
      },
      "heading-3": {
        "size": 24,
        "lineHeight": 32,
        "weight": 700,
        "letterSpacing": -0.2,
        "usage": "Subseções e cards destacados."
      },
      "heading-4": {
        "size": 20,
        "lineHeight": 28,
        "weight": 700,
        "letterSpacing": 0,
        "usage": "Títulos de card, formulário e listas."
      },
      "body-lg": {
        "size": 18,
        "lineHeight": 28,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Texto editorial e conteúdo público."
      },
      "body-md": {
        "size": 16,
        "lineHeight": 24,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Texto padrão de interface."
      },
      "body-sm": {
        "size": 14,
        "lineHeight": 20,
        "weight": 400,
        "letterSpacing": 0,
        "usage": "Descrição e apoio."
      },
      "label": {
        "size": 13,
        "lineHeight": 16,
        "weight": 600,
        "letterSpacing": 0.2,
        "usage": "Labels, botões e campos."
      },
      "caption": {
        "size": 12,
        "lineHeight": 16,
        "weight": 400,
        "letterSpacing": 0.2,
        "usage": "Metadados e rodapés."
      },
      "overline": {
        "size": 11,
        "lineHeight": 14,
        "weight": 700,
        "letterSpacing": 1.2,
        "usage": "Tags e cabeçalhos auxiliares."
      },
      "data": {
        "size": 14,
        "lineHeight": 20,
        "weight": 600,
        "letterSpacing": 0,
        "usage": "Tabelas, métricas e valores numéricos."
      }
    }
  }
} as const;
