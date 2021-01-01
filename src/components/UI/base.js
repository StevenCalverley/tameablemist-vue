import BaseButton from './base-components/BaseButton.vue';
import BaseIcon from './base-components/BaseIcon.vue';
import BaseInput from './base-components/BaseInput.vue';
import BaseInputGroup from './base-components/BaseInputGroup.vue';
import BaseInvalidFeedback from './base-components/BaseInvalidFeedback.vue';
import BaseRadio from './base-components/BaseRadio.vue';
import BaseCheckbox from './base-components/BaseCheckbox.vue';
import BaseTextarea from './base-components/BaseTextarea.vue';
import BaseSelect from './base-components/BaseSelect.vue';
import BaseSelectMenu from './base-components/BaseSelectMenu.vue';

export const registerComponents = (app) => {
  app.component('BaseButton', BaseButton);
  app.component('BaseIcon', BaseIcon);
  app.component('BaseInput', BaseInput);
  app.component('BaseInputGroup', BaseInputGroup);
  app.component('BaseInvalidFeedback', BaseInvalidFeedback);
  app.component('BaseRadio', BaseRadio);
  app.component('BaseCheckbox', BaseCheckbox);
  app.component('BaseTextarea', BaseTextarea);
  app.component('BaseSelect', BaseSelect);
  app.component('BaseSelectMenu', BaseSelectMenu);
  BaseInvalidFeedback
};
