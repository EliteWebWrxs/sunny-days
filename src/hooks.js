/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const userid = event.cookies.get('userid');

  if (!userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    event.locals.userid = crypto.randomUUID();
    event.cookies.set('userid', event.locals.userid, {
      path: '/',
      httpOnly: true
    });
  } else {
    event.locals.userid = userid;
  }

  return await resolve(event);
};
