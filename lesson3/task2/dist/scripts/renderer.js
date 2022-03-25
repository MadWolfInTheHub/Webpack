import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from "./storage.js";
const listElem = document.querySelector(".list");
export const renderTasks = () => {
  const tasks = getItem("tasksList") || [];
  listElem.innerHTML = '';
  const tasksElems = tasks.sort((a, b) => a.done - b.done).map(_ref => {
    let {
      text,
      done,
      id
    } = _ref;
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list-item", 'list__item');
    listItemElem.setAttribute("data-id", "".concat(id));
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", "".concat(id));
    checkbox.checked = done;
    checkbox.classList.add("list-item__checkbox");

    if (done) {
      listItemElem.classList.add("list-item_done");
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list-item__text');
    textElem.textContent = text;
    const deleteButtonElem = document.createElement('button');
    deleteButtonElem.classList.add('list-item__delete-btn');
    deleteButtonElem.setAttribute("data-id", "".concat(id));
    listItemElem.append(checkbox, textElem, deleteButtonElem);
    return listItemElem;
  });
  listElem.append(...tasksElems);
};