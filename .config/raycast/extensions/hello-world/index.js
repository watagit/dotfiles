"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => Command
});
module.exports = __toCommonJS(src_exports);
var import_api3 = require("@raycast/api");
var import_react = require("react");

// src/components/CreateTodoAction.tsx
var import_api2 = require("@raycast/api");

// src/components/CreateTodoForm.tsx
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
function CreateTodoForm(props) {
  const { defaultTitle, onCreate } = props;
  const { pop } = (0, import_api.useNavigation)();
  function handleSubmit(values) {
    onCreate(values.title);
    pop();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form, {
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.SubmitForm, {
        title: "Create Todo",
        onSubmit: handleSubmit
      })
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.TextField, {
      id: "title",
      defaultValue: defaultTitle,
      title: "Title"
    })
  });
}

// src/components/CreateTodoAction.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CreateTodoAction(props) {
  const { defaultTitle, onCreate } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.Action.Push, {
    icon: import_api2.Icon.Pencil,
    title: "Create Todo",
    shortcut: { modifiers: ["cmd"], key: "n" },
    target: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateTodoForm, {
      defaultTitle,
      onCreate
    })
  });
}

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const [todos, setTodos] = (0, import_react.useState)([]);
  function handleCreate(title) {
    const newTodos = [...todos, { title, isCompleted: false }];
    setTodos(newTodos);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List, {
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.ActionPanel, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.ActionPanel.Section, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateTodoAction, {
          onCreate: handleCreate
        })
      })
    }),
    children: todos.map((todo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List.Item, {
      title: todo.title
    }, index))
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcGVyc29uYWwvcmF5Y2FzdC9oZWxsby13b3JsZC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL3BlcnNvbmFsL3JheWNhc3QvaGVsbG8td29ybGQvc3JjL2NvbXBvbmVudHMvQ3JlYXRlVG9kb0FjdGlvbi50c3giLCAiLi4vLi4vLi4vLi4vcGVyc29uYWwvcmF5Y2FzdC9oZWxsby13b3JsZC9zcmMvY29tcG9uZW50cy9DcmVhdGVUb2RvRm9ybS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUGFuZWwsIExpc3QsIEljb24gfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDcmVhdGVUb2RvQWN0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVUb2RvQWN0aW9uXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdHlwZXMvVG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPEFycmF5PFRvZG8+PihbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2RvcywgeyB0aXRsZSwgaXNDb21wbGV0ZWQ6IGZhbHNlIH1dO1xuICAgIHNldFRvZG9zKG5ld1RvZG9zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgPEFjdGlvblBhbmVsLlNlY3Rpb24+XG4gICAgICAgICAgICA8Q3JlYXRlVG9kb0FjdGlvbiBvbkNyZWF0ZT17aGFuZGxlQ3JlYXRlfSAvPlxuICAgICAgICAgIDwvQWN0aW9uUGFuZWwuU2VjdGlvbj5cbiAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtIGtleT17aW5kZXh9IHRpdGxlPXt0b2RvLnRpdGxlfSAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbiwgSWNvbiB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxuaW1wb3J0IHsgQ3JlYXRlVG9kb0Zvcm0gfSBmcm9tIFwiLi9DcmVhdGVUb2RvRm9ybVwiO1xuXG50eXBlIENyZWF0ZVRvZG9BY3Rpb25Qcm9wcyA9IHtcbiAgZGVmYXVsdFRpdGxlPzogc3RyaW5nO1xuICBvbkNyZWF0ZTogKHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRvZG9BY3Rpb24ocHJvcHM6IENyZWF0ZVRvZG9BY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IGRlZmF1bHRUaXRsZSwgb25DcmVhdGUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxBY3Rpb24uUHVzaFxuICAgICAgaWNvbj17SWNvbi5QZW5jaWx9XG4gICAgICB0aXRsZT1cIkNyZWF0ZSBUb2RvXCJcbiAgICAgIHNob3J0Y3V0PXt7IG1vZGlmaWVyczogW1wiY21kXCJdLCBrZXk6IFwiblwiIH19XG4gICAgICB0YXJnZXQ9ezxDcmVhdGVUb2RvRm9ybSBkZWZhdWx0VGl0bGU9e2RlZmF1bHRUaXRsZX0gb25DcmVhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIEFjdGlvbiwgQWN0aW9uUGFuZWwsIHVzZU5hdmlnYXRpb24gfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbnR5cGUgQ3JlYXRlVG9kb0Zvcm1Qcm9wcyA9IHtcbiAgZGVmYXVsdFRpdGxlPzogc3RyaW5nO1xuICBvbkNyZWF0ZTogKHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRvZG9Gb3JtKHByb3BzOiBDcmVhdGVUb2RvRm9ybVByb3BzKSB7XG4gIGNvbnN0IHsgZGVmYXVsdFRpdGxlLCBvbkNyZWF0ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcG9wIH0gPSB1c2VOYXZpZ2F0aW9uKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHZhbHVlczogeyB0aXRsZTogc3RyaW5nIH0pIHtcbiAgICBvbkNyZWF0ZSh2YWx1ZXMudGl0bGUpO1xuICAgIHBvcCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICA8QWN0aW9uLlN1Ym1pdEZvcm0gdGl0bGU9XCJDcmVhdGUgVG9kb1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEZvcm0uVGV4dEZpZWxkIGlkPVwidGl0bGVcIiBkZWZhdWx0VmFsdWU9e2RlZmF1bHRUaXRsZX0gdGl0bGU9XCJUaXRsZVwiIC8+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUEsY0FBZ0Q7QUFDaEQsbUJBQXlCOzs7QUNEekIsSUFBQUMsY0FBNkI7OztBQ0E3QixpQkFBeUQ7QUFBekQ7QUFNTyxTQUFTLGVBQWUsT0FBNEI7QUFDekQsUUFBTSxFQUFFLGNBQWMsU0FBUyxJQUFJO0FBQ25DLFFBQU0sRUFBRSxJQUFJLFFBQUksMEJBQWM7QUFFOUIsV0FBUyxhQUFhLFFBQTJCO0FBQy9DLGFBQVMsT0FBTyxLQUFLO0FBQ3JCLFFBQUk7QUFBQSxFQUNOO0FBRUEsU0FDRSw0Q0FBQztBQUFBLElBQ0MsU0FDRSw0Q0FBQztBQUFBLE1BQ0Msc0RBQUMsa0JBQU8sWUFBUDtBQUFBLFFBQWtCLE9BQU07QUFBQSxRQUFjLFVBQVU7QUFBQSxPQUFjO0FBQUEsS0FDakU7QUFBQSxJQUdGLHNEQUFDLGdCQUFLLFdBQUw7QUFBQSxNQUFlLElBQUc7QUFBQSxNQUFRLGNBQWM7QUFBQSxNQUFjLE9BQU07QUFBQSxLQUFRO0FBQUEsR0FDdkU7QUFFSjs7O0FEMUJBO0FBUU8sU0FBUyxpQkFBaUIsT0FBOEI7QUFDN0QsUUFBTSxFQUFFLGNBQWMsU0FBUyxJQUFJO0FBQ25DLFNBQ0UsNENBQUMsbUJBQU8sTUFBUDtBQUFBLElBQ0MsTUFBTSxpQkFBSztBQUFBLElBQ1gsT0FBTTtBQUFBLElBQ04sVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJO0FBQUEsSUFDekMsUUFBUSw0Q0FBQztBQUFBLE1BQWU7QUFBQSxNQUE0QjtBQUFBLEtBQW9CO0FBQUEsR0FDMUU7QUFFSjs7O0FEbEJBO0FBTWUsU0FBUixVQUEyQjtBQUNoQyxRQUFNLENBQUMsT0FBTyxRQUFRLFFBQUksdUJBQXNCLENBQUMsQ0FBQztBQUVsRCxXQUFTLGFBQWEsT0FBZTtBQUNuQyxVQUFNLFdBQVcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxPQUFPLGFBQWEsTUFBTSxDQUFDO0FBQ3pELGFBQVMsUUFBUTtBQUFBLEVBQ25CO0FBRUEsU0FDRSw0Q0FBQztBQUFBLElBQ0MsU0FDRSw0Q0FBQztBQUFBLE1BQ0Msc0RBQUMsd0JBQVksU0FBWjtBQUFBLFFBQ0Msc0RBQUM7QUFBQSxVQUFpQixVQUFVO0FBQUEsU0FBYztBQUFBLE9BQzVDO0FBQUEsS0FDRjtBQUFBLElBR0QsZ0JBQU0sSUFBSSxDQUFDLE1BQU0sVUFDaEIsNENBQUMsaUJBQUssTUFBTDtBQUFBLE1BQXNCLE9BQU8sS0FBSztBQUFBLE9BQW5CLEtBQTBCLENBQzNDO0FBQUEsR0FDSDtBQUVKOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfYXBpIiwgImltcG9ydF9hcGkiXQp9Cg==
