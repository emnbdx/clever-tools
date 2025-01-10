export const EXPERIMENTAL_FEATURES = {
  kv: {
    status: 'alpha',
    description: 'Send commands to databases such as Materia KV or Redis® directly from Clever Tools, without other dependencies',
    instructions: `
Target any compatible add-on by its name or ID (with an org ID if needed) and send commands to it:

    clever kv myMateriaKV SET myKey myValue
    clever kv kv_xxxxxxxx GET myKey -F json
    clever kv addon_xxxxx SET myTempKey myTempValue EX 120
    clever kv myMateriaKV -o myOrg TTL myTempKey
    clever kv redis_xxxxx --org org_xxxxx PING

Learn more about Materia KV: https://www.clever-cloud.com/developers/doc/addons/materia-kv/`,
  },
  ng: {
    status: 'beta',
    description: 'Manage Network Groups to link applications, add-ons, external peers through a Wireguard network',
    instructions: `
- Create a Network Group:
    clever ng create myNG
- List Network Groups:
    clever ng
- Delete a Network Group:
    clever ng delete myNG
- Create a Network Group with members (application, add-on, external):
    clever ng create myNG --members-ids appId1,appId2
- (Un)Link an application to an existing Network Group:
    clever ng link appId myNG
    clever ng unlink appId myNG
- Get the Wireguard configuration of a peer:
    clever ng get-config peerIdOrLabel
- Get details about a Network Group, a member or a peer:
    clever ng get myNg
    clever ng get appId
    clever ng get peerId
    clever ng get memberLabel
Learn more about Network Groups: https://github.com/CleverCloud/clever-tools/blob/davlgd-new-ng/docs/ng.md`,
  },
};
