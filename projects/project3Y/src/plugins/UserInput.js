class UserInput {
  constructor(scene) {
    this.scene = scene;
    this.enabled = false;
  }
  set_input (user_input_data) {
    this.scene.input.keyboard.removeAllListeners('keydown');
    this.scene.input.keyboard.removeAllListeners('keyup');

    this.scene.input.keyboard.on('keydown', this.process_input, this);
    this.scene.input.keyboard.on('keyup'), this.process_input, this);

    this.user_inputs = user_input_data;

    this.enabled = true;
  }

  process_input (event) {
    
  }

}

export default UserInput;
