create or replace function scooru.commit_team(o jsonb) returns jsonb as
$$

if (!o.group_name) throw 'Missing group_name'
if (!o.package_id) throw 'Missing package_id'

const query = `select application_group__new($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`;

const retv = plv8.execute(query,[
  null, // group_id
  o.object_type || 'scooru_team',
  o.creation_date || new Date(),
  o.creation_user,
  o.creation_ip,
  o.email,
  o.url,
  o.group_name,
  o.package_id,
  o.join_policy,
  o.context_id
  ])[0];

  plv8.elog(INFO,`commit team <${o.group_name}> created retv:`,JSON.stringify(retv))

return retv;
$$ language plv8;

do $$
plv8.execute(`select scooru.commit_team($1)`,[{group_name:'team-A', package_id:373787}]);
$$ language plv8;
