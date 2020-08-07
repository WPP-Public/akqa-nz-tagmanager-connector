/*global pushTagEvent, a*/
/*eslint no-undef: "dataLayer"*/

/**
 * Main function that will push data to Tag Manager
 *
 * @param {Object} args
 */
const pushTagEvent = (args) => {
  // define analytics event in one place
  if (typeof dataLayer !== 'undefined' && !!dataLayer) {
    dataLayer.push(args);
  }
}

export default class TagManager {
  /**
   *  Send a simple Custom event, you can pass the data as object
   *
   * @static
   * @param {String} eventName
   * @param {Object} eventData
   * @memberof TagManager
   */
  static customEvent(eventName, eventData) {
    if (typeof eventData === 'object') {
      pushTagEvent({'event': eventName, ...eventData});
    } else {
      pushTagEvent({'event': eventName});
    }
  }

  /**
   * Send a virtual page view to the container, you need to specify the new path
   *
   * @static
   * @param {String} path
   * @memberof TagManager
   */
  static virtualPageView(path) {
    pushTagEvent({'event': 'virtual_page_view', 'path': path});
  }
};
