import { test_hash } from '~/controllers/test';
import BASE from './base';
export function norm_head_base_load(base_load) {
    const load = {
        task: base_load.task,
    };
    if (base_load.find) {
        load.find = norm_head_base_load_find(base_load.find);
    }
    if (base_load.read) {
        load.read = norm_head_base_load_read(base_load.read);
    }
    if (base_load.save) {
        load.save = norm_head_base_load_save(base_load.save);
    }
    return load;
}
export function norm_head_base_load_find(base_find) {
    const find = {};
    const link_fail = [];
    Object.keys(base_find).forEach(name => {
        const form = BASE[name];
        if (!form) {
            link_fail.push(name);
        }
        else {
        }
    });
    return find;
}
export function norm_head_base_load_read(base_read) {
    const read = {};
    Object.keys(base_read).forEach(name => {
        const form = BASE[name];
        const mesh = base_read[name];
        test_hash(mesh);
        if (form) {
        }
    });
    return read;
}
export function norm_head_base_load_save(base_save) {
    const save = {};
    return save;
}
//# sourceMappingURL=in.js.map