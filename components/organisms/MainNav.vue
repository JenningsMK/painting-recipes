<template>
  <nav aria-label="primary-navigation">
    <section>
      <h2>Elder scrolls: call to arms</h2>
      <ul>
        <li>
          <h3>Bleak falls barrow</h3>
          <ul>
            <li>
              <nuxt-link
                to="/elder-scrolls-call-to-arms/bleak-falls-barrow/dragonborn">
                Dragonbord
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/elder-scrolls-call-to-arms/bleak-falls-barrow/draugr">
                Draugr
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/elder-scrolls-call-to-arms/bleak-falls-barrow/skeletons">
                Skeletons
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Fallout Wasteland Warfare</h2>
      <ul>
        <li>
          <h3>Wasteland creatures</h3>
          <ul>
            <li>
              <nuxt-link
                to="/fallout-wasteland-warfare/wasteland-creatures/mirelurk-queen">
                Mirelurk queen
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/fallout-wasteland-warfare/wasteland-creatures/mirelurk-frog-crawler">
                Mirelurk frog crawler
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/fallout-wasteland-warfare/wasteland-creatures/mirelurks">
                Mirelurk
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/fallout-wasteland-warfare/wasteland-creatures/mirelurk-hunters">
                Mirelurk hunters
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/fallout-wasteland-warfare/wasteland-creatures/mirelurk-hatchlings-and-eggs">
                Mirelurk hatchlings & eggs
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Warhammer 40,000</h2>
      <ul>
        <li>
          <h3>Black Templars</h3>
          <ul>
            <li>
              <nuxt-link to="/warhammer-40k/black-templars/emperors-champions">
                Emperors champions
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <h3>Dark eldar</h3>
          <ul>
            <li>
              <nuxt-link
                to="/warhammer-40k/dark-eldar/voidraven-bomber">Voidraven bomber
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>

export default {
  name: 'MainNav'
}
</script>
