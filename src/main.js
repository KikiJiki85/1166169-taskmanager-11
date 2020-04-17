import BoardComponent from "./components/board.js";
import FilterComponent from "./components/filter.js";
import loadMoreButtonComponent from "./components/load-more-button.js";
import TaskEditComponent from "./components/task-edit.js";
import TaskComponent from "./components/task.js";
import SiteMenuComponent from "./components/site-menu.js";
import SortComponent from "./components/sorting.js";
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";
import {render, RenderPosition} from "./utils.js";
import Filter from "./components/filter.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = () => {};

const renderBoard = () => {};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

