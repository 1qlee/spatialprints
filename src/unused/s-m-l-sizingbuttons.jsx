<ContentBlock>
  <p className="heading">Sizes</p>
  <ButtonWrapper>
    <Button
      className={`is-small is-outlined ${currentSize === "S" ? `is-selected` : ""}`}
      onClick={e => setCurrentSize(e.target.textContent)}>
      S
    </Button>
    <Button
      className={`is-small is-outlined ${currentSize === "M" ? `is-selected` : ""}`}
      onClick={e => setCurrentSize(e.target.textContent)}>
      M
    </Button>
    <Button
      className={`is-small is-outlined ${currentSize === "L" ? `is-selected` : ""}`}
      onClick={e => setCurrentSize(e.target.textContent)}>
      L
    </Button>
  </ButtonWrapper>
</ContentBlock>
