export const emit = (target, eventName, detail) => {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
};

export const on = (target, eventName, handler) => {
  target.addEventListener(eventName, handler);
};

export const qs = (selector, scope = document) => {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
};

export const qsAll = (selector, scope = document) => {
  if (!selector) throw "no selector";

  return Array.from(scope.querySelectorAll(selector));
};

export const delegate = (target, eventName, selector, handler) => {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);

    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
};

export const formatRelativeDate = (date = new Date()) => {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
};

export const createPastDate = (date = 1, now = new Date()) => {
  if (date < 1) throw "date는 1 이상입니다";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
};

export const createNextId = (list = []) => {
  return Math.max(...list.map((item) => item.id)) + 1;
};

export const removeChildNodes = (selector) => {
  const rootNode = qs(selector);

  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
};
