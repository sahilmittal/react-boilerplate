process.env.REACT_APP_STAGE === 'dev'

let hostDomain = "dev";

if (process.env.REACT_APP_STAGE === "staging") {
  hostDomain = "stg";
} else if (process.env.REACT_APP_STAGE === "production") {
  hostDomain = "prd";
}

export const host = `https://${hostDomain}`;

const analyticsPath = 'service/custom/auth/analytics';

export const endpoints = {
    
}