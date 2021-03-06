/* src/components/Modal.svelte generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot
} from "/web_modules/svelte/internal.js";

import { createEventDispatcher, onDestroy } from "/web_modules/svelte.js";

function create_fragment(ctx) {
	let div2;
	let div0;
	let t0;
	let div1;
	let header;
	let p;
	let t1;
	let t2;
	let button;
	let t3;
	let section;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			header = element("header");
			p = element("p");
			t1 = text(/*title*/ ctx[0]);
			t2 = space();
			button = element("button");
			t3 = space();
			section = element("section");
			if (default_slot) default_slot.c();
			attr(div0, "class", "modal-background");
			attr(p, "class", "modal-card-title");
			attr(button, "class", "delete");
			attr(button, "aria-label", "close");
			attr(header, "class", "modal-card-head");
			attr(section, "class", "modal-card-body");
			attr(div1, "class", "modal-card");
			attr(div2, "class", "modal is-active");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div2, t0);
			append(div2, div1);
			append(div1, header);
			append(header, p);
			append(p, t1);
			append(header, t2);
			append(header, button);
			append(div1, t3);
			append(div1, section);

			if (default_slot) {
				default_slot.m(section, null);
			}

			/*section_binding*/ ctx[6](section);
			current = true;

			if (!mounted) {
				dispose = [
					listen(window, "keydown", /*handle_keydown*/ ctx[3]),
					listen(div0, "click", /*close*/ ctx[2]),
					listen(button, "click", /*close*/ ctx[2])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t1, /*title*/ ctx[0]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (default_slot) default_slot.d(detaching);
			/*section_binding*/ ctx[6](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");
	let modal;
	let { title } = $$props;

	const handle_keydown = e => {
		if (e.key === "Escape") {
			close();
			return;
		}

		if (e.key === "Tab") {
			// trap focus
			const nodes = modal.querySelectorAll("*");

			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== "undefined" && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}

	let { $$slots = {}, $$scope } = $$props;

	function section_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			modal = $$value;
			$$invalidate(1, modal);
		});
	}

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [title, modal, close, handle_keydown, $$scope, $$slots, section_binding];
}

class Modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
	}
}

export default Modal;