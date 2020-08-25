# bunadmin-auth-strapi
[This plugin needs to be used in BunAdmin](https://github.com/bunred/bunadmin)

### How to use

```
yarn add bunadmin-auth-strapi

# append to plugins-info.json
  {
    "enable": true,
    "plugin-id": "bunadmin-auth-strapi",
    "plugin-folder": "buncms-user"
  },

node plugins-update.js
```

Get ready to get Strapi up and running in less than 5 minutes 🚀.
```
yarn create strapi-app my-project --quickstart
```
To access the server ⚡️, open: [http://localhost:1337](http://localhost:1337)

Update **env.js** in bunadmin root path
```
DEV: {
    ...
    AUTH_URL: "http://localhost:1337",
}
```

In [Strapi](http://localhost:1337/admin/plugins/users-permissions/roles), add new role: Reviewer, and set permissions:
![1acbe53ad4bdd50d268440bcbdf73875.png](https://miro.medium.com/max/1240/1*F4W0TDOSi_-ip9TVqPr5TQ.png)
![e5d838b89ebd732d028df4e90696723d.png](https://miro.medium.com/max/1240/1*nqY-b8wdKqdqcNh68AS3Rg.png)

Add a new user set role to Reviewer.
![11ae86c13b2490fe096150f088d05061.png](https://miro.medium.com/max/1400/1*5YE08zgLzy5-TcigVW93_A.png)

Now login with it in bunadmin, you can see:
![ae00c8f12422a934ff717be65472995c.png](https://miro.medium.com/max/1400/1*qnGd0QK_YLQ9wBI3h4uBSg.png)

---
### Develop (hot reloading)
```
git clone https://github.com/bunred/bunadmin
cd bunadmin/plugins
git clone https://github.com/bunred/bunadmin-auth-strapi buncms-user
yarn && yarn dev
```
