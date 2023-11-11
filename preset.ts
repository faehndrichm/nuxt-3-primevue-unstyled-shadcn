import type { PrimeVuePTOptions } from "primevue/config";
import DefaultPreset from "primevue/passthrough/tailwind";

export const TRANSITIONS = {
  overlay: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass:
      "transition-transform transition-opacity duration-150 ease-in",
    leaveActiveClass: "transition-opacity duration-150 ease-linear",
    leaveToClass: "opacity-0",
  },
};

const MyCustomPreset: PrimeVuePTOptions = {
  button: {
    root: (options) => {
      const props = options.props,
        context = options.context;
      return {
        class: [
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/80":
              !props.link &&
              props.severity === null &&
              !props.text &&
              !props.outlined &&
              !props.plain,
            "text-primary decoration-2 underline-offset-4 hover:underline":
              props.link,
          },
          {
            "bg-secondary text-secondary-foreground hover:bg-secondary/50":
              props.severity === "secondary",
            "bg-destructive text-destructive-foreground hover:bg-destructive/80":
              props.severity === "danger",
            "hover:bg-accent hover:text-accent-foreground":
              props.severity === "ghost",
          },
          {
            "rounded-none": !props.rounded,
            "rounded-md": props.rounded,
          },
          {
            "h-10 px-4 py-2": props.size === null,
            "h-9 rounded-md px-3": props.size === "small",
            "h-11 rounded-md px-8": props.size === "large",
          },
          {
            "flex-column": props.iconPos == "top" || props.iconPos == "bottom",
          },
          {
            "opacity-60 pointer-events-none cursor-default": context.disabled,
          },
        ],
      };
    },
    label: function label(_ref27) {
      var props = _ref27.props;
      return {
        class: [
          "flex-1",
          "duration-200",
          {
            "hover:underline": props.link,
          },
          {
            "invisible w-0": props.label == null,
          },
        ],
      };
    },
    icon: function icon(_ref28) {
      var props = _ref28.props;
      return {
        class: [
          "mx-0",
          {
            "mr-2": props.iconPos == "left" && props.label != null,
            "ml-2 order-1": props.iconPos == "right" && props.label != null,
            "mb-2": props.iconPos == "top" && props.label != null,
            "mt-2 order-2": props.iconPos == "bottom" && props.label != null,
          },
        ],
      };
    },
    badge: function badge(_ref29) {
      var props = _ref29.props;
      return {
        class: [
          {
            "ml-2 w-4 h-4 leading-none flex items-center justify-center":
              props.badge,
          },
        ],
      };
    },
  },
  inputtext: {
    root: {
      class:
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
  },
  checkbox: {
    root: {
      class: [
        "cursor-pointer inline-flex relative select-none align-bottom",
        "w-5 h-5",
      ],
    },
    input: ({ props, context }) => ({
      class: [
        "flex items-center justify-center",
        "border shrink-0 peer border-primary w-5 h-5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md transition-colors duration-200",
        {
          "": !context.checked,
          "bg-primary text-primary-foreground": context.checked,
        },
      ],
    }),
    icon: "w-4 h-4",
  },
  inputswitch: {
    root: ({ props }) => ({
      class: [
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors ",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        {
          "cursor-not-allowed opacity-50 select-none pointer-events-none":
            props.disabled,
          "bg-primary hover:bg-primary/80": !props.modelValue,
          "bg-input hover:bg-input/50": props.modelValue,
        },
      ],
    }),
    slider: ({ props }) => ({
      class: [
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "translate-x-0": props.modelValue,
          "translate-x-5": !props.modelValue,
        },
      ],
    }),
  },
  dropdown: {
    root: ({ props }) => ({
      class: [
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background ",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "cursor-not-allowed opacity-50 select-none pointer-events-none":
            props.disabled,
        },
      ],
    }),
    input: ({ props }) => ({
      class: [
        "cursor-pointer block flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap relative",
        "bg-transparent border-0 text-foreground placeholder:text-muted-foreground",
        "p-3 transition duration-200 bg-transparent rounded appearance-none text-sm",
        { "pr-7": props.showClear },
      ],
    }),
    trigger: {
      class: [
        "flex items-center justify-center shrink-0",
        "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg",
      ],
    },
    wrapper: {
      class: [
        "px-1 mt-1 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
      ],
    },
    list: {
      class: "py-3 list-none m-0",
    },
    item: ({ context }) => ({
      class: [
        "relative flex w-full cursor-default select-none items-center rounded-sm  py-1.5 pl-8 pr-2 text-sm outline-none  data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        {
          "": context.focused,
          "hover:bg-accent hover:text-accent-foreground": !context.selected,
          "bg-primary text-primary-foreground": context.selected,
        },
      ],
    }),
    itemGroup: {
      class: [
        "m-0 p-3 text-gray-800 bg-white font-bold",
        "dark:bg-gray-900 dark:text-white/80",
        "cursor-auto",
      ],
    },
    header: {
      class: [
        "p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg",
        "dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40",
      ],
    },
    filterContainer: {
      class: "relative",
    },
    filterInput: {
      class: [
        "pr-7 -mr-7",
        "w-full",
        "text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none",
        "dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80",
        "hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
      ],
    },
    filterIcon: {
      class: "-mt-2 absolute top-1/2",
    },
    clearIcon: {
      class: "text-gray-500 right-12 -mt-2 absolute top-1/2",
    },
    transition: TRANSITIONS.overlay,
  },
  calendar: {
    root: ({ props }) => ({
      class: [
        "relative inline-flex w-[280px] max-w-full relative flex-row-reverse",
        {
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        },
      ],
    }),
    dropdownButton: {
      root: {
        class:
          "absolute left-0 top-0 bottom-0 m-auto flex justify-center items-center w-10",
      },
      label: {
        class: "hidden",
      },
    },
    input: {
      class: [
        "flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      ],
    },
    panel: ({ props }) => ({
      class: [
        "w-[280px] mt-2 rounded-md p-3",
        {
          "z-50 border bg-popover  text-popover-foreground shadow-md outline-none":
            !props.inline,
          "inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg":
            props.inline,
        },
      ],
    }),
    header: {
      class: ["flex items-center justify-between", "p-2 m-0 "],
    },
    previousButton: {
      class: [
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
      ],
    },
    nextButton: {
      class: [
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
      ],
    },
    title: "leading-8 mx-auto flex gap-1",
    monthTitle: {
      class: [
        "text-sm font-medium text-foreground hover:text-muted-foreground",
      ],
    },
    yearTitle: {
      class: [
        "text-sm font-medium text-foreground hover:text-muted-foreground",
      ],
    },
    table: {
      class: ["w-full border-collapse space-y-3"],
    },
    tableHeaderRow: "flex",
    tableHeaderCell: "p-0 h-9 w-9",
    tableBodyRow: "flex mt-2",
    weekDay: "text-muted-foreground rounded-md w-9 text-[0.8rem]",
    day: "h-9 w-9 text-center text-sm p-0 relative  first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    dayLabel: ({ context }) => ({
      class: [
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-9 w-9 p-0  aria-selected:opacity-100",
        {
          "opacity-50 cursor-default": context.disabled,
          "cursor-pointer": !context.disabled,
        },
        {
          "hover:bg-accent hover:text-accent-foreground":
            !context.selected && !context.disabled,
          "bg-primary text-primary-foreground":
            context.selected && !context.disabled,
        },
      ],
    }),
    monthPicker: "my-2",
    month: ({ context }) => ({
      class: [
        "w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative",
        "p-2 transition-shadow duration-200 rounded-lg",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80":
            !context.selected && !context.disabled,
          "text-blue-700 bg-blue-100 hover:bg-blue-200":
            context.selected && !context.disabled,
        },
      ],
    }),
    yearPicker: {
      class: ["my-2"],
    },
    year: ({ context }) => ({
      class: [
        "w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative",
        "p-2 transition-shadow duration-200 rounded-lg",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80":
            !context.selected && !context.disabled,
          "text-blue-700 bg-blue-100 hover:bg-blue-200":
            context.selected && !context.disabled,
        },
      ],
    }),
    timePicker: {
      class: [
        "flex justify-center items-center",
        "border-t-1 border-solid border-gray-300 p-2",
      ],
    },
    separatorContainer: "flex items-center flex-col px-2",
    separator: "text-xl",
    hourPicker: "flex items-center flex-col px-2",
    minutePicker: "flex items-center flex-col px-2",
    ampmPicker: "flex items-center flex-col px-2",
    groupContainer: "flex",
    group: {
      class: [
        "flex-1",
        "border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0",
        "first:pl-0 first:border-l-0",
      ],
    },
    transition: TRANSITIONS.overlay,
  },
  slider: {
    root: ({ props }) => ({
      class: [
        "relative flex w-full h-2 grow touch-none select-none rounded-full items-center bg-secondary",
        {
          "h-1 w-56": props.orientation == "horizontal",
          "w-1 h-56": props.orientation == "vertical",
        },
        {
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        },
      ],
    }),
    range: ({ props }) => ({
      class: [
        "bg-primary rounded-full",
        "block absolute",
        {
          "top-0 left-0 h-full": props.orientation == "horizontal",
          "bottom-0 left-0 w-full": props.orientation == "vertical",
        },
      ],
    }),
    handle: ({ props }) => ({
      class: [
        "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        {
          "top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]":
            props.orientation == "horizontal",
          "left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]":
            props.orientation == "vertical",
        },
      ],
    }),
    startHandler: ({ props }) => ({
      class: [
        "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]":
            props.orientation == "horizontal",
          "left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]":
            props.orientation == "vertical",
        },
      ],
    }),
    endHandler: ({ props }) => ({
      class: [
        "block h-5 w-5 rounded-full border-1 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]":
            props.orientation == "horizontal",
          "left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]":
            props.orientation == "vertical",
        },
      ],
    }),
  },
  radiobutton: {
    root: {
      class: [
        "relative inline-flex cursor-pointer select-none align-bottom",
        "w-5 h-5",
      ],
    },
    input: ({ props }) => ({
      class: [
        "flex justify-center items-center",
        "border-2 w-5 h-5 text-foreground rounded-full transition duration-200 ease-in-out",
        {
          "border-input bg-background": props.value !== props.modelValue,
          "border-primary bg-background": props.value == props.modelValue,
        },
        {
          "hover:border-primary focus:outline-none focus:outline-offset-0":
            !props.disabled,
          "cursor-default opacity-60": props.disabled,
        },
      ],
    }),
    icon: ({ props }) => ({
      class: [
        "transform rounded-full",
        "block w-3 h-3 transition duration-200 bg-primary dark:bg-gray-900",
        {
          "backface-hidden scale-10 invisible":
            props.value !== props.modelValue,
          "transform scale-100 visible": props.value == props.modelValue,
        },
      ],
    }),
  },
  textarea: {
    root: ({ context }) => ({
      class: [
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",
        {
          "cursor-not-allowed opacity-50 select-none pointer-events-none":
            context.disabled,
        },
      ],
    }),
  },
  datatable: {
    root: ({ props }) => ({
      class: [
        "relative border border-input rounded-md overflow-hidden",
        {
          "flex flex-col h-full":
            props.scrollable && props.scrollHeight === "flex",
        },
      ],
    }),
    loadingOverlay: {
      class: [
        "fixed w-full h-full t-0 l-0 bg-gray-100/40",
        "transition duration-200",
        "absolute flex items-center justify-center z-2",
      ],
    },
    loadingIcon: "w-8 h-8",
    wrapper: ({ props }) => ({
      class: [
        {
          relative: props.scrollable,
          "flex flex-col grow h-full":
            props.scrollable && props.scrollHeight === "flex",
        },
      ],
    }),
    header: ({ props }) => ({
      class: [
        "p-4",
        props.showGridlines
          ? "border-x border-t border-b-0"
          : "border-y border-x-0",
      ],
    }),
    table: "w-full border-spacing-0 text-sm",
    thead: ({ context }) => ({
      class: [
        {
          // "bg-slate-50 top-0 z-[1]": props.scrollable,
        },
      ],
    }),
    tbody: ({ instance, context }) => ({
      class: [
        {
          //"sticky z-[1]": instance.frozenRow && context.scrollable,
        },
      ],
    }),
    tfoot: ({ context }) => ({
      class: [
        {
          //"bg-slate-50 bottom-0 z-[1]": context.scrollable,
        },
      ],
    }),
    footer: {
      class: [
        "bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-input font-bold p-4",
        "dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900", // Dark Mode
      ],
    },
    column: {
      headercell: ({ context, props }: { context: any; props: any }) => ({
        class: [
          "text-left border-0 border-b border-solid border-input text-muted-foreground",
          "transition duration-200",
          context?.size === "small"
            ? "p-2"
            : context?.size === "large"
            ? "p-5"
            : "p-4", // Size
          {
            "sticky z-[1]": props.frozen || props.frozen === "", // Frozen Columns
            "border-x border-y": context?.showGridlines,
            "overflow-hidden space-nowrap border-y relative bg-clip-padding":
              context.resizable, // Resizable
          },
        ],
      }),
      headercontent: "flex items-center",
      bodycell: ({ props, context }: { context: any; props: any }) => ({
        class: [
          "text-left border-0 ",
          context?.size === "small"
            ? "p-2"
            : context?.size === "large"
            ? "p-5"
            : "p-4",
          {
            "sticky bg-inherit": props.frozen || props.frozen === "",
            "border-x border-y": context?.showGridlines,
          },
        ],
      }),
      footercell: ({ context }: { context: any }) => ({
        class: [
          "text-left border-0 border-b border-solid border-input font-bold",
          "bg-slate-50 text-slate-700",
          "transition duration-200",
          context?.size === "small"
            ? "p-2"
            : context?.size === "large"
            ? "p-5"
            : "p-4", // Size
          "dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40", // Dark Mode
          {
            "border-x border-y": context?.showGridlines,
          },
        ],
      }),
      sorticon: ({ context }: { context: any }) => ({
        class: [
          "ml-2",
          context.sorted ? "text-foreground" : "text-muted-foreground",
        ],
      }),
      sortbadge: {
        class: [
          "flex items-center justify-center align-middle",
          "rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2",
          "text-blue-700 bg-blue-50",
          "dark:text-white/80 dark:bg-blue-400", // Dark Mode
        ],
      },
      columnfilter: "inline-flex items-center ml-auto",
      filteroverlay: {
        class: [
          "bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]",
          "dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80", //Dark Mode
        ],
      },
      filtermatchmodedropdown: {
        root: "min-[0px]:flex mb-2",
      },
      filterrowitems: "m-0 p-0 py-3 list-none ",
      filterrowitem: ({ context }: { context: any }) => ({
        class: [
          "m-0 py-3 px-5 bg-transparent",
          "transition duration-200",
          context?.highlighted
            ? "text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300"
            : "text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent",
        ],
      }),
      filteroperator: {
        class: [
          "px-5 py-3 border-b border-solid border-input text-slate-700 bg-slate-50 rounded-t-md",
          "dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900", // Dark Mode
        ],
      },
      filteroperatordropdown: {
        root: "min-[0px]:flex",
      },
      filterconstraint:
        "p-5 border-b border-solid border-input dark:border-blue-900/40",
      filteraddrule: "py-3 px-5",
      filteraddrulebutton: {
        root: "justify-center w-full min-[0px]:text-sm",
        label: "flex-auto grow-0",
        icon: "mr-2",
      },
      filterremovebutton: {
        root: "ml-2",
        label: "grow-0",
      },
      filterbuttonbar: "flex items-center justify-between p-5",
      filterclearbutton: {
        root: "w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3",
      },
      filterapplybutton: {
        root: "w-auto min-[0px]:text-sm px-4 py-3",
      },
      filtermenubutton: ({ context }: { context: any }) => ({
        class: [
          "inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2",
          "w-8 h-8 rounded-[50%]",
          "transition duration-200",
          "hover:text-slate-700 hover:bg-input/20", // Hover
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", // Focus
          "dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900", // Dark Mode
          {
            "bg-blue-50 text-blue-700": context.active,
          },
        ],
      }),
      headerfilterclearbutton: ({ context }: { context: any }) => ({
        class: [
          "inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative",
          "text-left bg-transparent m-0 p-0 border-none select-none ml-2",
          {
            invisible: !context.hidden,
          },
        ],
      }),
      columnresizer:
        "block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent",
      rowreordericon: "cursor-move",
      roweditorinitbutton: {
        class: [
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", //Focus
          "hover:text-slate-700 hover:bg-input/20", //Hover
          "dark:text-white/70", // Dark Mode
        ],
      },
      roweditorsavebutton: {
        class: [
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", //Focus
          "hover:text-slate-700 hover:bg-input/20", //Hover
          "dark:text-white/70", // Dark Mode
        ],
      },
      roweditorcancelbutton: {
        class: [
          "inline-flex items-center justify-center overflow-hidden relative",
          "text-left cursor-pointer select-none",
          "w-8 h-8 border-0 rounded-[50%]",
          "transition duration-200",
          "text-slate-700 border-transparent",
          "focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", //Focus
          "hover:text-slate-700 hover:bg-input/20", //Hover
          "dark:text-white/70", // Dark Mode
        ],
      },
      radiobuttonwrapper: {
        class: [
          "relative inline-flex cursor-pointer select-none align-bottom",
          "w-6 h-6",
        ],
      },
      radiobutton: ({ context }: { context: any }) => ({
        class: [
          "flex justify-center items-center",
          "border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out",
          context.checked
            ? "border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400"
            : "border-input bg-white dark:border-blue-900/40 dark:bg-gray-900",
          {
            "hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]":
              !context.disabled,
            "cursor-default opacity-60": context.disabled,
          },
        ],
      }),
      radiobuttonicon: ({ context }: { context: any }) => ({
        class: [
          "transform rounded-full",
          "block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900",
          {
            "backface-hidden scale-10 invisible": context.checked === false,
            "transform scale-100 visible": context.checked === true,
          },
        ],
      }),
      headercheckboxwrapper: {
        class: [
          "cursor-pointer inline-flex relative select-none align-bottom",
          "w-6 h-6",
        ],
      },
      headercheckbox: ({ context }: { context: any }) => ({
        class: [
          "flex items-center justify-center",
          "border border-primary w-5 h-5 text-primary rounded-md transition-colors duration-200",
          context.checked ? "bg-primary" : "bg-background",
          {
            "focus:outline-none focus:outline-offset-0": !context.disabled,
            "cursor-default opacity-50": context.disabled,
          },
        ],
      }),
      headercheckboxicon: "w-4 h-4 transition-all duration-200 text-background",
      checkboxwrapper: {
        class: [
          "cursor-pointer inline-flex relative select-none align-bottom",
          "w-5 h-5",
        ],
      },
      checkbox: ({ context }: { context: any }) => ({
        class: [
          "flex items-center justify-center",
          "border border-primary w-5 h-5 text-primary rounded-md transition-colors duration-200",
          context.checked ? "bg-primary" : "bg-background",
          {
            "focus:outline-none focus:outline-offset-0": !context.disabled,
            "cursor-default opacity-50": context.disabled,
          },
        ],
      }),
      checkboxicon: "w-4 h-4 transition-all duration-200 text-background",
      transition: TRANSITIONS.overlay,
    },
    bodyRow: ({ context }: { context: any }) => ({
      class: [
        "border-b last:border-none last:rounded-b-md border-solid border-input",
        context.selected
          ? "bg-muted/50 text-foreground"
          : "bg-background text-foreground hover:bg-secondary",
        context.stripedRows
          ? context.index % 2 === 0
            ? "bg-background text-foreground"
            : "bg-secondary text-foreground"
          : "",
        "transition duration-200",
        {
          "cursor-pointer": context.selectable,
          "hover:bg-secondary": context.selectable && !context.selected, // Hover
        },
      ],
    }),
    rowExpansion: "bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80",
    rowGroupHeader: {
      class: [
        "sticky z-[1]",
        "bg-white text-gray-600",
        "transition duration-200",
      ],
    },
    rowGroupFooter: {
      class: [
        "sticky z-[1]",
        "bg-white text-gray-600",
        "transition duration-200",
      ],
    },
    // rowGroupToggler: {
    //   class: [
    //     "text-left m-0 p-0 cursor-pointer select-none",
    //     "inline-flex items-center justify-center overflow-hidden relative",
    //     "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]",
    //     "transition duration-200",
    //     "dark:text-white/70", // Dark Mode
    //   ],
    // },
    //rowgrouptogglericon: "inline-block w-4 h-4",
    resizeHelper: "absolute hidden w-px z-10 bg-primary",
  },
  card: {
    root: {
      class: [
        "rounded-lg border bg-card text-card-foreground shadow-sm", // Background, text color, box shadow, and border radius.
      ],
    },
    body: ["p-5"], // Padding.
    title: ["text-2xl font-bold mb-2"], // Font size, font weight, and margin bottom.
    subtitle: {
      class: [
        "font-normal mb-2 text-muted-foreground", // Font weight, margin bottom, and text color.
      ],
    },
    content: ["py-5"], // Vertical padding.
    footer: ["pt-5"], // Top padding.
  },
  toast: {
    root: {
      class: ["w-96"],
    },
    container: ({ props }) => ({
      class: [
        "mt-1 group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        {
          "border bg-background text-foreground":
            props.message?.severity == "info" ||
            props.message?.severity == "success" ||
            props.message?.severity == "warn",
          "destructive group border-destructive bg-destructive text-destructive-foreground":
            props.message?.severity == "error",
        },
      ],
    }),
    content: "",
    icon: {
      class: "hidden",
    },
    text: "grid gap-1",
    summary: "text-sm font-semibold",
    detail: "text-sm opacity-90",
    closeButton: {
      class: [
        "focus:ring-foreground/50 absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      ],
    },
    transition: {
      enterFromClass: "opacity-0 translate-x-0 translate-y-2/4 translate-z-0",
      enterActiveClass: "transition-transform transition-opacity duration-300",
      leaveFromClass: "translate-x-0",
      leaveActiveClass: "transition-all duration-200 ease-in",
      leaveToClass: "translate-x-full opacity-0 mb-0 overflow-hidden",
    },
  },
  message: {
    root: ({ props }) => ({
      class: [
        "mt-1 group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        {
          "border bg-background text-foreground":
            props.severity == "info" ||
            props.severity == "success" ||
            props.severity == "warn",
          "destructive group border-destructive bg-destructive text-destructive-foreground":
            props.severity == "error",
        },
      ],
    }),
    wrapper: "flex flex-row gap-3",
    icon: {
      class: ["w-6 h-6", "text-lg mr-2"],
    },
    text: "",
    //summary: "text-sm font-semibold",
    //detail: "text-sm opacity-90",
    closeButton: {
      class: [
        "focus:ring-foreground/50 absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      ],
    },
    // button: {
    //   class: [
    //     "w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out",
    //     "ml-auto overflow-hidden relative",
    //     "flex items-center justify-center",
    //     "hover:bg-white/30",
    //   ],
    // },
    transition: {
      enterFromClass: "opacity-0 translate-x-0 translate-y-2/4 translate-z-0",
      enterActiveClass: "transition-transform transition-opacity duration-300",
      leaveFromClass: "translate-x-0",
      leaveActiveClass: "transition-all duration-200 ease-in",
      leaveToClass: "translate-x-full opacity-0 mb-0 overflow-hidden",
    },
  },
  dialog: {
    root: ({ state }) => ({
      class: [
        "relative w-full max-w-lg  gap-4 border bg-background p-6 shadow-lg duration-200",
        "sm:rounded-lg md:w-full sm:max-w-[425px]",
        {
          "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
            state.maximized,
        },
      ],
    }),
    header: {
      class: [
        "flex items-start justify-between shrink-0",
        "border-t-0  rounded-tl-lg rounded-tr-lg",
      ],
    },
    headerTitle: {
      class: "font-bold text-lg",
    },
    headerIcons: {
      class: "flex items-center",
    },
    closeButton: {
      class: [
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ",
      ],
    },
    closeButtonIcon: {
      class: "w-4 h-4",
    },
    content: ({ state, instance }) => ({
      class: [
        {
          grow: state.maximized,
        },
        {
          "rounded-bl-lg rounded-br-lg": !instance.$slots.footer,
        },
      ],
    }),
    footer: {
      class: [
        "flex gap-2 shrink-0 justify-end align-center",
        "border-t-0 text-right rounded-b-lg",
      ],
    },
    mask: ({ props }) => ({
      class: [
        "transition-all duration-200",
        { "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm": props.modal },
      ],
    }),
    transition: ({ props }) => {
      return props.position === "top"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",
          }
        : props.position === "bottom"
        ? {
            enterFromClass: "opacity-0 scale-75 translate-y-full",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0",
          }
        : props.position === "left" ||
          props.position === "topleft" ||
          props.position === "bottomleft"
        ? {
            enterFromClass:
              "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0",
          }
        : props.position === "right" ||
          props.position === "topright" ||
          props.position === "bottomright"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",
          }
        : {
            enterFromClass: "opacity-0 scale-75",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass: "opacity-0 scale-75",
          };
    },
  },
  skeleton: {
    root: ({ props }) => ({
      class: [
        "overflow-hidden",
        "!mb-2",
        "bg-muted animate-pulse",
        {
          "rounded-md": props.shape !== "circle",
          "rounded-full": props.shape == "circle",
        },
      ],
    }),
  },
};

//export default DefaultPreset;
export default { ...DefaultPreset, ...MyCustomPreset };
