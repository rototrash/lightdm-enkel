// Example LightDM state

const debug = message => console.debug("LightDM API called: ", message)

window.lightdm = {

  login(user, session) {
    debug(`Log in occured where user = ${user} and session = ${session}`)
  },
  authenticate(username) {
    debug(`authenticate("${username}")`)
    this.authentication_user = username
    show_prompt("Password: ", "password")
  },
  authenticate_as_guest() {
    debug("authenticate_as_guest()")
  },
  cancel_authentication() {
    debug("cancel_authentication()")
  },
  cancel_autologin() {
    debug("cancel_autologin()")
  },
  get_hint(hint_name) {
    debug(`get_hint(${hint_name})`)
  },
  suspend() {
    debug("suspend()")
  },
  hibernate() {
    debug("hibernate()")
  },
  start_session_sync(session) {
    debug(`start_session_sync(${session})`)
  },
  respond(value) {
    debug(`respond("${value}")`)
    if (value === "testing") {
      this.is_authenticated = true
    }
    setTimeout(() => authentication_complete(), 2000)
  },
  restart() {
    debug("restart()")
  },
  set_language(lang) {
    debug(`set_language(${lang})`)
  },
  shutdown() {
    debug("shutdown()")
  },

  authentication_user: null,
  autologin_guest: false,
  autologin_timeout: null,
  autologin_user: null,
  can_hibernate: true,
  can_restart: true,
  can_shutdown: true,
  can_suspend: true,
  default_session: null,
  has_guest_account: false,
  hide_users: false,
  hostname: "HostnameHere",
  is_authenticated: false,
  in_authentication: false,
  language: "en_US",
  //layout: "en_US",
  //layouts: []
  num_users: 3,
  select_guest: false,
  select_user: null,
  sessions: [
    {
      name: "Plasma",
      key: "plasma-shell"
    },
    {
      name: "Gnome",
      key: "gnome-shell"
    },
    {
      name: "Cinnamon",
      key: "cinnamon"
    },
    {
      name: "i3wm",
      key: "i3"
    },
    {
      name: "bspwm",
      key: "bspwm"
    },
    {
      name: "Xfce",
      key: "xfce"
    }
  ],
  users: [
    {
      display_name: "John Doe",
      username: "johndoe",
      logged_in: true,
      session: "i3"
    },
    {
      display_name: "Imam Murrah",
      username: "skallah",
      logged_in: false,
      session: "xfce"
    },
    {
      display_name: "Master Yo",
      username: "saltypretzel",
      logged_in: false,
      session: "gnome-shell"
    }
  ]
}
