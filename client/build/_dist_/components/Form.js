/* src/components/Form.svelte generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	prevent_default,
	run_all,
	safe_not_equal,
	select_option,
	select_value,
	set_input_value,
	space,
	to_number
} from "/web_modules/svelte/internal.js";

import { createEventDispatcher } from "/web_modules/svelte.js";

function create_fragment(ctx) {
	let form;
	let div1;
	let label0;
	let t1;
	let div0;
	let input0;
	let t2;
	let div3;
	let label1;
	let t4;
	let div2;
	let input1;
	let t5;
	let div5;
	let label2;
	let t7;
	let div4;
	let input2;
	let t8;
	let div7;
	let label3;
	let t10;
	let div6;
	let input3;
	let t11;
	let div9;
	let label4;
	let t13;
	let div8;
	let select0;
	let option0;
	let option1;
	let option2;
	let option3;
	let option4;
	let t19;
	let div11;
	let div10;
	let input4;
	let t20;
	let div13;
	let label5;
	let t22;
	let div12;
	let select1;
	let option5;
	let option6;
	let option7;
	let option8;
	let option9;
	let option10;
	let option11;
	let t30;
	let div15;
	let div14;
	let input5;
	let t31;
	let div17;
	let label6;
	let t33;
	let div16;
	let select2;
	let option12;
	let option13;
	let option14;
	let option15;
	let t38;
	let div19;
	let label7;
	let t40;
	let div18;
	let textarea0;
	let t41;
	let div21;
	let label8;
	let t43;
	let div20;
	let input6;
	let t44;
	let div23;
	let label9;
	let t46;
	let div22;
	let input7;
	let t47;
	let div25;
	let label10;
	let t49;
	let div24;
	let input8;
	let t50;
	let div27;
	let label11;
	let t52;
	let div26;
	let textarea1;
	let t53;
	let div29;
	let label12;
	let t55;
	let div28;
	let textarea2;
	let t56;
	let div30;
	let mounted;
	let dispose;

	return {
		c() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			label0.textContent = "Id";
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			label1 = element("label");
			label1.textContent = "Fracción";
			t4 = space();
			div2 = element("div");
			input1 = element("input");
			t5 = space();
			div5 = element("div");
			label2 = element("label");
			label2.textContent = "Descripción";
			t7 = space();
			div4 = element("div");
			input2 = element("input");
			t8 = space();
			div7 = element("div");
			label3 = element("label");
			label3.textContent = "Nombre";
			t10 = space();
			div6 = element("div");
			input3 = element("input");
			t11 = space();
			div9 = element("div");
			label4 = element("label");
			label4.textContent = "Ligamento";
			t13 = space();
			div8 = element("div");
			select0 = element("select");
			option0 = element("option");
			option0.textContent = "Elige";
			option1 = element("option");
			option1.textContent = "Tafetán";
			option2 = element("option");
			option2.textContent = "Sarga";
			option3 = element("option");
			option3.textContent = "Satín";
			option4 = element("option");
			option4.textContent = "Otro";
			t19 = space();
			div11 = element("div");
			div10 = element("div");
			input4 = element("input");
			t20 = space();
			div13 = element("div");
			label5 = element("label");
			label5.textContent = "Acabado";
			t22 = space();
			div12 = element("div");
			select1 = element("select");
			option5 = element("option");
			option5.textContent = "Elige";
			option6 = element("option");
			option6.textContent = "Crudo";
			option7 = element("option");
			option7.textContent = "Blanqueado";
			option8 = element("option");
			option8.textContent = "Teñido";
			option9 = element("option");
			option9.textContent = "Preteñido";
			option10 = element("option");
			option10.textContent = "Estampado";
			option11 = element("option");
			option11.textContent = "Otro";
			t30 = space();
			div15 = element("div");
			div14 = element("div");
			input5 = element("input");
			t31 = space();
			div17 = element("div");
			label6 = element("label");
			label6.textContent = "Filamento o Fibra";
			t33 = space();
			div16 = element("div");
			select2 = element("select");
			option12 = element("option");
			option12.textContent = "Elige";
			option13 = element("option");
			option13.textContent = "Filamento continuo";
			option14 = element("option");
			option14.textContent = "Fibra discontinua";
			option15 = element("option");
			option15.textContent = "Filamento y fibra discontinua";
			t38 = space();
			div19 = element("div");
			label7 = element("label");
			label7.textContent = "Composición";
			t40 = space();
			div18 = element("div");
			textarea0 = element("textarea");
			t41 = space();
			div21 = element("div");
			label8 = element("label");
			label8.textContent = "Tejido";
			t43 = space();
			div20 = element("div");
			input6 = element("input");
			t44 = space();
			div23 = element("div");
			label9 = element("label");
			label9.textContent = "Gramaje en g/m2";
			t46 = space();
			div22 = element("div");
			input7 = element("input");
			t47 = space();
			div25 = element("div");
			label10 = element("label");
			label10.textContent = "Ancho en cm";
			t49 = space();
			div24 = element("div");
			input8 = element("input");
			t50 = space();
			div27 = element("div");
			label11 = element("label");
			label11.textContent = "Otros datos";
			t52 = space();
			div26 = element("div");
			textarea1 = element("textarea");
			t53 = space();
			div29 = element("div");
			label12 = element("label");
			label12.textContent = "Conclusión";
			t55 = space();
			div28 = element("div");
			textarea2 = element("textarea");
			t56 = space();
			div30 = element("div");
			div30.innerHTML = `<button class="button is-primary">Guardar</button>`;
			attr(label0, "class", "label is-small");
			attr(input0, "class", "input");
			attr(input0, "type", "number");
			input0.required = true;
			attr(div0, "class", "control");
			attr(div1, "class", "field");
			attr(label1, "class", "label is-small");
			attr(input1, "class", "input");
			attr(input1, "type", "text");
			attr(input1, "pattern", "\\d\\d\\d\\d\\.\\d\\d\\.\\d\\d");
			attr(input1, "title", "El formato correcto es xxxx.xx.xx");
			input1.required = true;
			attr(div2, "class", "control");
			attr(div3, "class", "field");
			attr(label2, "class", "label is-small");
			attr(input2, "class", "input");
			attr(input2, "type", "text");
			attr(div4, "class", "control");
			attr(div5, "class", "field");
			attr(label3, "class", "label is-small");
			attr(input3, "class", "input");
			attr(input3, "type", "text");
			attr(div6, "class", "control");
			attr(div7, "class", "field");
			attr(label4, "class", "label is-small");
			option0.__value = "";
			option0.value = option0.__value;
			option1.__value = "Tafetán";
			option1.value = option1.__value;
			option2.__value = "Sarga";
			option2.value = option2.__value;
			option3.__value = "Satín";
			option3.value = option3.__value;
			option4.__value = "Otro";
			option4.value = option4.__value;
			select0.required = true;
			if (/*reporte*/ ctx[0].ligamento === void 0) add_render_callback(() => /*select0_change_handler*/ ctx[6].call(select0));
			attr(div8, "class", "select is-fullwidth");
			attr(div9, "class", "control is-expanded");
			attr(input4, "class", "input");
			attr(input4, "type", "text");
			attr(div10, "class", "control");
			attr(div11, "class", "field");
			attr(div11, "id", "lig");
			div11.hidden = true;
			attr(label5, "class", "label is-small");
			option5.__value = "";
			option5.value = option5.__value;
			option6.__value = "Crudo";
			option6.value = option6.__value;
			option7.__value = "Blanqueado";
			option7.value = option7.__value;
			option8.__value = "Teñido";
			option8.value = option8.__value;
			option9.__value = "Preteñido";
			option9.value = option9.__value;
			option10.__value = "Estampado";
			option10.value = option10.__value;
			option11.__value = "Otro";
			option11.value = option11.__value;
			select1.required = true;
			if (/*reporte*/ ctx[0].acabado === void 0) add_render_callback(() => /*select1_change_handler*/ ctx[8].call(select1));
			attr(div12, "class", "select is-fullwidth");
			attr(div13, "class", "control is-expanded");
			attr(input5, "class", "input");
			attr(input5, "type", "text");
			attr(div14, "class", "control");
			attr(div15, "class", "field");
			attr(div15, "id", "aca");
			div15.hidden = true;
			attr(label6, "class", "label is-small");
			option12.__value = "";
			option12.value = option12.__value;
			option13.__value = "Filamento continuo";
			option13.value = option13.__value;
			option14.__value = "Fibra discontinua";
			option14.value = option14.__value;
			option15.__value = "Filamento y Fibra discontinua";
			option15.value = option15.__value;
			select2.required = true;
			if (/*reporte*/ ctx[0].filfib === void 0) add_render_callback(() => /*select2_change_handler*/ ctx[10].call(select2));
			attr(div16, "class", "select is-fullwidth");
			attr(div17, "class", "control is-expanded");
			attr(label7, "class", "label is-small");
			attr(textarea0, "class", "textarea");
			attr(div18, "class", "control");
			attr(div19, "class", "field");
			attr(label8, "class", "label is-small");
			attr(input6, "class", "input");
			attr(input6, "type", "text");
			attr(div20, "class", "control");
			attr(div21, "class", "field");
			attr(label9, "class", "label is-small");
			attr(input7, "class", "input");
			attr(input7, "type", "number");
			attr(div22, "class", "control");
			attr(div23, "class", "field");
			attr(label10, "class", "label is-small");
			attr(input8, "class", "input");
			attr(input8, "type", "text");
			attr(div24, "class", "control");
			attr(div25, "class", "field");
			attr(label11, "class", "label is-small");
			attr(textarea1, "class", "textarea");
			attr(div26, "class", "control");
			attr(div27, "class", "field");
			attr(label12, "class", "label is-small");
			attr(textarea2, "class", "textarea");
			attr(div28, "class", "control");
			attr(div29, "class", "field");
			attr(div30, "class", "has-text-centered");
		},
		m(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input0);
			set_input_value(input0, /*reporte*/ ctx[0].id);
			append(form, t2);
			append(form, div3);
			append(div3, label1);
			append(div3, t4);
			append(div3, div2);
			append(div2, input1);
			set_input_value(input1, /*reporte*/ ctx[0].fraccion);
			append(form, t5);
			append(form, div5);
			append(div5, label2);
			append(div5, t7);
			append(div5, div4);
			append(div4, input2);
			set_input_value(input2, /*reporte*/ ctx[0].descripcion);
			append(form, t8);
			append(form, div7);
			append(div7, label3);
			append(div7, t10);
			append(div7, div6);
			append(div6, input3);
			set_input_value(input3, /*reporte*/ ctx[0].nombre);
			append(form, t11);
			append(form, div9);
			append(div9, label4);
			append(div9, t13);
			append(div9, div8);
			append(div8, select0);
			append(select0, option0);
			append(select0, option1);
			append(select0, option2);
			append(select0, option3);
			append(select0, option4);
			select_option(select0, /*reporte*/ ctx[0].ligamento);
			append(form, t19);
			append(form, div11);
			append(div11, div10);
			append(div10, input4);
			set_input_value(input4, /*reporte*/ ctx[0].lig);
			append(form, t20);
			append(form, div13);
			append(div13, label5);
			append(div13, t22);
			append(div13, div12);
			append(div12, select1);
			append(select1, option5);
			append(select1, option6);
			append(select1, option7);
			append(select1, option8);
			append(select1, option9);
			append(select1, option10);
			append(select1, option11);
			select_option(select1, /*reporte*/ ctx[0].acabado);
			append(form, t30);
			append(form, div15);
			append(div15, div14);
			append(div14, input5);
			set_input_value(input5, /*reporte*/ ctx[0].aca);
			append(form, t31);
			append(form, div17);
			append(div17, label6);
			append(div17, t33);
			append(div17, div16);
			append(div16, select2);
			append(select2, option12);
			append(select2, option13);
			append(select2, option14);
			append(select2, option15);
			select_option(select2, /*reporte*/ ctx[0].filfib);
			append(form, t38);
			append(form, div19);
			append(div19, label7);
			append(div19, t40);
			append(div19, div18);
			append(div18, textarea0);
			set_input_value(textarea0, /*reporte*/ ctx[0].composicion);
			append(form, t41);
			append(form, div21);
			append(div21, label8);
			append(div21, t43);
			append(div21, div20);
			append(div20, input6);
			set_input_value(input6, /*reporte*/ ctx[0].tejido);
			append(form, t44);
			append(form, div23);
			append(div23, label9);
			append(div23, t46);
			append(div23, div22);
			append(div22, input7);
			set_input_value(input7, /*reporte*/ ctx[0].gramaje);
			append(form, t47);
			append(form, div25);
			append(div25, label10);
			append(div25, t49);
			append(div25, div24);
			append(div24, input8);
			set_input_value(input8, /*reporte*/ ctx[0].ancho);
			append(form, t50);
			append(form, div27);
			append(div27, label11);
			append(div27, t52);
			append(div27, div26);
			append(div26, textarea1);
			set_input_value(textarea1, /*reporte*/ ctx[0].otros);
			append(form, t53);
			append(form, div29);
			append(div29, label12);
			append(div29, t55);
			append(div29, div28);
			append(div28, textarea2);
			set_input_value(textarea2, /*reporte*/ ctx[0].conclusion);
			append(form, t56);
			append(form, div30);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[2]),
					listen(input1, "input", /*input1_input_handler*/ ctx[3]),
					listen(input2, "input", /*input2_input_handler*/ ctx[4]),
					listen(input3, "input", /*input3_input_handler*/ ctx[5]),
					listen(select0, "change", /*select0_change_handler*/ ctx[6]),
					listen(select0, "change", handleChange),
					listen(input4, "input", /*input4_input_handler*/ ctx[7]),
					listen(select1, "change", /*select1_change_handler*/ ctx[8]),
					listen(select1, "change", handleChange),
					listen(input5, "input", /*input5_input_handler*/ ctx[9]),
					listen(select2, "change", /*select2_change_handler*/ ctx[10]),
					listen(textarea0, "input", /*textarea0_input_handler*/ ctx[11]),
					listen(input6, "input", /*input6_input_handler*/ ctx[12]),
					listen(input7, "input", /*input7_input_handler*/ ctx[13]),
					listen(input8, "input", /*input8_input_handler*/ ctx[14]),
					listen(textarea1, "input", /*textarea1_input_handler*/ ctx[15]),
					listen(textarea2, "input", /*textarea2_input_handler*/ ctx[16]),
					listen(form, "submit", prevent_default(/*handleSubmit*/ ctx[1]))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*reporte*/ 1 && to_number(input0.value) !== /*reporte*/ ctx[0].id) {
				set_input_value(input0, /*reporte*/ ctx[0].id);
			}

			if (dirty & /*reporte*/ 1 && input1.value !== /*reporte*/ ctx[0].fraccion) {
				set_input_value(input1, /*reporte*/ ctx[0].fraccion);
			}

			if (dirty & /*reporte*/ 1 && input2.value !== /*reporte*/ ctx[0].descripcion) {
				set_input_value(input2, /*reporte*/ ctx[0].descripcion);
			}

			if (dirty & /*reporte*/ 1 && input3.value !== /*reporte*/ ctx[0].nombre) {
				set_input_value(input3, /*reporte*/ ctx[0].nombre);
			}

			if (dirty & /*reporte*/ 1) {
				select_option(select0, /*reporte*/ ctx[0].ligamento);
			}

			if (dirty & /*reporte*/ 1 && input4.value !== /*reporte*/ ctx[0].lig) {
				set_input_value(input4, /*reporte*/ ctx[0].lig);
			}

			if (dirty & /*reporte*/ 1) {
				select_option(select1, /*reporte*/ ctx[0].acabado);
			}

			if (dirty & /*reporte*/ 1 && input5.value !== /*reporte*/ ctx[0].aca) {
				set_input_value(input5, /*reporte*/ ctx[0].aca);
			}

			if (dirty & /*reporte*/ 1) {
				select_option(select2, /*reporte*/ ctx[0].filfib);
			}

			if (dirty & /*reporte*/ 1) {
				set_input_value(textarea0, /*reporte*/ ctx[0].composicion);
			}

			if (dirty & /*reporte*/ 1 && input6.value !== /*reporte*/ ctx[0].tejido) {
				set_input_value(input6, /*reporte*/ ctx[0].tejido);
			}

			if (dirty & /*reporte*/ 1 && to_number(input7.value) !== /*reporte*/ ctx[0].gramaje) {
				set_input_value(input7, /*reporte*/ ctx[0].gramaje);
			}

			if (dirty & /*reporte*/ 1 && input8.value !== /*reporte*/ ctx[0].ancho) {
				set_input_value(input8, /*reporte*/ ctx[0].ancho);
			}

			if (dirty & /*reporte*/ 1) {
				set_input_value(textarea1, /*reporte*/ ctx[0].otros);
			}

			if (dirty & /*reporte*/ 1) {
				set_input_value(textarea2, /*reporte*/ ctx[0].conclusion);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(form);
			mounted = false;
			run_all(dispose);
		}
	};
}

function handleChange(e) {
	e.target.value === "Otro"
	? e.target.parentElement.parentElement.nextElementSibling.removeAttribute("hidden")
	: e.target.parentElement.parentElement.nextElementSibling.setAttribute("hidden", "");
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { reporte } = $$props;

	function handleSubmit() {
		dispatch("submit", reporte);
	}

	function input0_input_handler() {
		reporte.id = to_number(this.value);
		$$invalidate(0, reporte);
	}

	function input1_input_handler() {
		reporte.fraccion = this.value;
		$$invalidate(0, reporte);
	}

	function input2_input_handler() {
		reporte.descripcion = this.value;
		$$invalidate(0, reporte);
	}

	function input3_input_handler() {
		reporte.nombre = this.value;
		$$invalidate(0, reporte);
	}

	function select0_change_handler() {
		reporte.ligamento = select_value(this);
		$$invalidate(0, reporte);
	}

	function input4_input_handler() {
		reporte.lig = this.value;
		$$invalidate(0, reporte);
	}

	function select1_change_handler() {
		reporte.acabado = select_value(this);
		$$invalidate(0, reporte);
	}

	function input5_input_handler() {
		reporte.aca = this.value;
		$$invalidate(0, reporte);
	}

	function select2_change_handler() {
		reporte.filfib = select_value(this);
		$$invalidate(0, reporte);
	}

	function textarea0_input_handler() {
		reporte.composicion = this.value;
		$$invalidate(0, reporte);
	}

	function input6_input_handler() {
		reporte.tejido = this.value;
		$$invalidate(0, reporte);
	}

	function input7_input_handler() {
		reporte.gramaje = to_number(this.value);
		$$invalidate(0, reporte);
	}

	function input8_input_handler() {
		reporte.ancho = this.value;
		$$invalidate(0, reporte);
	}

	function textarea1_input_handler() {
		reporte.otros = this.value;
		$$invalidate(0, reporte);
	}

	function textarea2_input_handler() {
		reporte.conclusion = this.value;
		$$invalidate(0, reporte);
	}

	$$self.$set = $$props => {
		if ("reporte" in $$props) $$invalidate(0, reporte = $$props.reporte);
	};

	return [
		reporte,
		handleSubmit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler,
		select0_change_handler,
		input4_input_handler,
		select1_change_handler,
		input5_input_handler,
		select2_change_handler,
		textarea0_input_handler,
		input6_input_handler,
		input7_input_handler,
		input8_input_handler,
		textarea1_input_handler,
		textarea2_input_handler
	];
}

class Form extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { reporte: 0 });
	}
}

export default Form;