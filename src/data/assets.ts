// ---------------------------------------------------------------------------
// PLACEHOLDER ASSETS — nothing here is a real sourced file. Drop your own
// video/images into /public/assets/ using these exact filenames, or update
// the paths below to match whatever you name them.
// ---------------------------------------------------------------------------

export const heroAssets = {
  video: "/assets/hero-video.mp4",
  videoWebm: "/assets/hero-video.webm", // optional second format for broader codec support
  poster: "/assets/hero-poster.jpg",
};

export const locationAssets = {
  // Design Ergonomics Inc. interior renders (John Street, dated 12/23/25) —
  // used on the /new-office gallery. Rename these to match your actual
  // exported filenames, or keep as-is and just drop files in with these names.
  johnStreetWaitingRoom: "/assets/john-street-waiting-room.png", // render 3 — reception + waiting area, "SALINAS VALLEY DENTAL CARE" sign visible
  johnStreetReceptionDesk: "/assets/john-street-reception-desk.png", // render 4 — reception desk, window view of the fields
  johnStreetHallway: "/assets/john-street-hallway.png", // render 1 — treatment-room corridor
  johnStreetSinkNook: "/assets/john-street-sink-nook.png", // render 2 — hallway sink/mirror nook
  mainStreetExterior: "/assets/main-street-exterior.png",
};

export const teamAssets = {
  groupPhoto: "/assets/team-group-photo.jpg",
};

export const galleryAssets = {
  officeWide: "/assets/office-wide-shot.jpg",
};

export const brandAssets = {
  // Drop the client's logo PNG here (transparent background recommended).
  logo: "/assets/svdc-logo.png",
};

// Cover image behind the /new-office hero copy — sits full-bleed behind the
// headline with a dark gradient overlay (see NewOfficeLanding.tsx). Any
// landscape-ish photo works; the overlay handles contrast regardless of
// what image goes in.
export const heroCoverAsset = "/assets/main-street-exterior.png";
