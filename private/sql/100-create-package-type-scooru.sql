do $$
plv8.elog(NOTICE, 'Create scooru package-type');

const package_key = 'scooru';
const pretty_name = 'SCOORU';
const pretty_plural = 'SCOORU';
const package_uri = 'abatros.com';
const package_type = 'apm_application';
const initial_install_p = false;
const singleton_p = false;
const implement_subsite_p = false;
const inherit_templates_p = false;
const spec_file_path = '/www/scooru.com';
const spec_file_mtime = 0;

const v = plv8.execute('select * from apm_package_types where package_key = $1',[package_key]);
if (v.length > 0) {
  plv8.elog(INFO,`Package type <${package_key}> already exists : ${v.length}`)
  return v[0];
}

const v2 = plv8.execute("select apm_package_type__create_type($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",
  [
  package_key,
  pretty_name,
  pretty_plural,
  package_uri,
  package_type,
  initial_install_p,
  singleton_p,
  implement_subsite_p,
  inherit_templates_p,
  spec_file_path,
  spec_file_mtime
  ]);

plv8.elog(INFO,`Package type <${package_key}> created v2:`,JSON.stringify(v2))

$$ language plv8;
