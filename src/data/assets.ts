// ---------------------------------------------------------------------------
// PLACEHOLDER ASSETS — nothing here is a real sourced file. Drop your own
// video/images into /public/assets/ using these exact filenames, or update
// the paths below to match whatever you name them.
//
// IMPORTANT — why every path goes through withBase():
// Files in /public are served as-is, and hardcoded strings like
// "/assets/foo.jpg" are just plain text to Vite — they do NOT automatically
// get the GitHub Pages subpath (e.g. "/svdc_website/") added in front when
// you build. Vite only rewrites paths it can see through imports or
// index.html, not plain string literals like the ones below. Without this
// helper, every image/video here would work in local dev (base "/") but
// 404 once deployed (base "/svdc_website/"). withBase() reads Vite's
// BASE_URL at build time so these paths are correct in both places —
// this is also the one thing to double check any time the repo name, and
// therefore the deploy path, changes.
// ---------------------------------------------------------------------------

import { withBase } from "../lib/paths";

export const heroAssets = {
  video: withBase("assets/hero-video.mp4"),
  videoWebm: withBase("assets/hero-video.webm"), // optional second format for broader codec support
  poster: withBase("assets/hero-poster.jpg"),
};

export const locationAssets = {
  // Design Ergonomics Inc. interior renders (John Street, dated 12/23/25) —
  // used on the /new-office gallery. Rename these to match your actual
  // exported filenames, or keep as-is and just drop files in with these names.
  johnStreetWaitingRoom: withBase("assets/john-street-waiting-room.png"), // render 3 — reception + waiting area, "SALINAS VALLEY DENTAL CARE" sign visible
  johnStreetReceptionDesk: withBase("assets/john-street-reception-desk.png"), // render 4 — reception desk, window view of the fields
  johnStreetHallway: withBase("assets/john-street-hallway.png"), // render 1 — treatment-room corridor
  johnStreetSinkNook: withBase("assets/john-street-sink-nook.png"), // render 2 — hallway sink/mirror nook
  mainStreetExterior: withBase("assets/main-street-exterior.png"),
};

export const teamAssets = {
  groupPhoto: withBase("assets/team-group-photo.png"),
};

export const galleryAssets = {
  officeWide: withBase("assets/office-wide-shot.png"),
};

export const brandAssets = {
  // Drop the client's logo PNG here (transparent background recommended).
  logo: withBase("assets/svdc-logo.png"),
};

// Cover image behind the /new-office hero copy — sits full-bleed behind the
// headline with a dark gradient overlay (see NewOfficeLanding.tsx). Any
// landscape-ish photo works; the overlay handles contrast regardless of
// what image goes in.
export const heroCoverAsset = withBase("assets/main-street-exterior.png");
