// Constants
const epoch_0 = 1729526400;
const epoch_1 = 1729440000;

const dist_0_v1 = 24774415223.9042;
const dist_1_v1 = 24771378658.9297;

const dist_0_v2 = 20648346975.5566;
const dist_1_v2 = 20645033597.4889;

const dist_0_v1s = 24694003570.8536;
const dist_1_v1s = 24692544278.6295;

const dist_0_v2s = 20633281538.0550;
const dist_1_v2s = 20631982508.2502;

// Assuming these values for vital_signs
const vital_signs = {
    current_time: Math.floor(Date.now() / 1000), // Current time in seconds since epoch
    au_const: 149597870.7 // 1 AU in kilometers
};

// Calculating current distances for Voyager 1
let current_dist_km_v1 = (((vital_signs.current_time - epoch_0) / (epoch_1 - epoch_0)) * (dist_1_v1 - dist_0_v1)) + dist_0_v1;
let current_dist_au_v1 = (current_dist_km_v1 / vital_signs.au_const).toString();
current_dist_au_v1 = current_dist_au_v1.split('.');
current_dist_au_v1 = current_dist_au_v1[0] + '.' + current_dist_au_v1[1].substring(0, 8);

// Calculating current distances for Voyager 2
let current_dist_km_v2 = (((vital_signs.current_time - epoch_0) / (epoch_1 - epoch_0)) * (dist_1_v2 - dist_0_v2)) + dist_0_v2;
let current_dist_au_v2 = (current_dist_km_v2 / vital_signs.au_const).toString();
current_dist_au_v2 = current_dist_au_v2.split('.');
current_dist_au_v2 = current_dist_au_v2[0] + '.' + current_dist_au_v2[1].substring(0, 8);

// Calculating current distances for Voyager 1s
let current_dist_km_v1s = (((vital_signs.current_time - epoch_0) / (epoch_1 - epoch_0)) * (dist_1_v1s - dist_0_v1s)) + dist_0_v1s;
let current_dist_au_v1s = (current_dist_km_v1s / vital_signs.au_const).toString();
current_dist_au_v1s = current_dist_au_v1s.split('.');
current_dist_au_v1s = current_dist_au_v1s[0] + '.' + current_dist_au_v1s[1].substring(0, 8);

// Calculating current distances for Voyager 2s
let current_dist_km_v2s = (((vital_signs.current_time - epoch_0) / (epoch_1 - epoch_0)) * (dist_1_v2s - dist_0_v2s)) + dist_0_v2s;
let current_dist_au_v2s = (current_dist_km_v2s / vital_signs.au_const).toString();
current_dist_au_v2s = current_dist_au_v2s.split('.');
current_dist_au_v2s = current_dist_au_v2s[0] + '.' + current_dist_au_v2s[1].substring(0, 8);

// Calculating light travel time for Voyager 1 and 2
let current_dist_lt_v1 = ((current_dist_km_v1 * 2) / 299792.458) / 2;
let current_dist_lt_v2 = ((current_dist_km_v2 * 2) / 299792.458) / 2;

// Logging results
console.log(`Current Distance Voyager 1: ${current_dist_km_v1.toFixed(2)} km / ${current_dist_au_v1} AU`);
console.log(`Current Distance Voyager 2: ${current_dist_km_v2.toFixed(2)} km / ${current_dist_au_v2} AU`);
console.log(`Current Distance Voyager 1s: ${current_dist_km_v1s.toFixed(2)} km / ${current_dist_au_v1s} AU`);
console.log(`Current Distance Voyager 2s: ${current_dist_km_v2s.toFixed(2)} km / ${current_dist_au_v2s} AU`);
console.log(`Light Travel Time Voyager 1: ${current_dist_lt_v1.toFixed(6)} seconds`);
console.log(`Light Travel Time Voyager 2: ${current_dist_lt_v2.toFixed(6)} seconds`);
