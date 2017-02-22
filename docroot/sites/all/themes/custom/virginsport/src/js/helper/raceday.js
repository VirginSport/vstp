import Vue from '../lib/vue';

let vue = new Vue();

/**
 * Get Event details using vue-resource
 *
 * Raceday Event corresponds to VirginSport festival
 *
 * @param raceDayUrl
 * @param festivalId
 * @param params
 * @returns {Promise}
 */
export function getRacedayEvent(raceDayUrl, festivalId, params) {
  return new Promise((resolve, reject) => {
    vue.$http.get(`${raceDayUrl}/api/v1/event/${festivalId}`, params).then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    }).catch(() => {
      reject()
    });
  });
}

/**
 * Get Race details using vue-resource
 *
 * Raceday Race corresponds to VirginSport event
 *
 * @param raceDayUrl
 * @param festivalId
 * @param raceId
 * @param params
 * @returns {Promise}
 */
export function getRacedayRace(raceDayUrl, festivalId, raceId, params) {
  return new Promise((resolve, reject) => {
    vue.$http.get(`${raceDayUrl}/api/v1/event/${festivalId}/race/${raceId}/results`, params).then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    }).catch(() => {
      reject();
    });
  });
}


/**
 * Get Participant details using vue-resource
 *
 * @param raceDayUrl
 * @param participantID
 * @param params
 * @returns {Promise}
 */
export function getRacedayParticipant(raceDayUrl, participantID, params) {
  return new Promise((resolve, reject) => {
    vue.$http.get(`${raceDayUrl}/api/v1/participant/${participantID}`, params).then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    }).catch(() => {
      reject();
    });
  });
}
